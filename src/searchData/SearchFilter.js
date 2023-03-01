import React, { useState } from "react";
import data from "./dataB";
import Popup from "./Popup";
import "./searchFilter.css";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const [popupActive, setPopupActive] = useState(false);
  const [userCard, setUserCard] = useState({
    firstName: "",
    lastName: "",
    country: "",
  });

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Искать..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search__main">
        {data
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (
              val.firstName.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            } else if (
              val.lastName.toLowerCase().includes(search.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, key) => (
            <div
              className="search__user"
              key={key}
              onClick={() => {
                setUserCard({
                  firstName: item.firstName,
                  lastName: item.lastName,
                  country: item.country,
                  company: item.company,
                  phone: item.phone,
                });
                setPopupActive(true);
              }}
            >
              <p>
                <strong>
                  {item.firstName} {item.lastName}
                </strong>{" "}
                from {item.country}
              </p>
            </div>
          ))}
        <Popup active={popupActive} setActive={setPopupActive}>
          <p className="search__user-Card">
            <p className="user-card__initials">
              ФИО:{" "}
              <strong>
                {userCard.firstName} {userCard.lastName}
              </strong>
            </p>
            <p className="user-card__company">
              Место работы: <br />
              <strong>{userCard.company}</strong>
            </p>
            <p className="user-card__country">
              Страна: <strong>{userCard.country}</strong>
            </p>
            <p className="user-card__phone">
              Номер:{" "}
              <strong>
                <tt>{userCard.phone}</tt>
              </strong>
            </p>
          </p>
        </Popup>
      </div>
    </div>
  );
};

export default SearchFilter;
