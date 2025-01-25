import React from 'react';
import '../styles/style.css'; // Ensure styles are properly linked

const Socials = () => {
  return (
    <div className="container">
      <div
        className="slider"
        style={{
          '--width': '100px',
          '--height': '50px',
          '--quantity': 10,
        }}
      >
        <div className="list">
          {[...Array(10)].map((_, index) => (
            <div className="item" key={index} style={{ '--position': index + 1 }}>
              <img
                src="https://media-hosting.imagekit.io//8e3bfdcbb3914af1/soccer.png?Expires=1832391930&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wo41oukmW6Lq3ZeQ4QbyGzrMDzlR5IPzkY1DPCH8JrDndQIZxZq6Wo4xrVCAGDiW8PBUFYq8mGWsQQckoNk0ilGqpC0uyaR-Mn-p6ESKQW2iOniaDNdNwBqO9BdQMcYfbfTrHdYj7gDisz4Gst3Fe0088p4pYST-pIljD-XVXPHm7FPxED5Ub9LhcCFoFDVJStnFM3AvUlpFftY8iO5MIH69RxPtO1klL7V5BNHeJ2wRiTZkvNLfk4osZne5wwNk0uGlXlF8WM97YQ-lLksbuV5zSCnF97LHH943TK8H42rldwvBRskK-B56CFLyShI7Gsy4xoUD28xPqAfH0xK4ug__"
                alt={`Avatar ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="slider reverse"
        style={{
          '--width': '200px',
          '--height': '200px',
          '--quantity': 9,
        }}
      >
        <div className="list">
          {[...Array(9)].map((_, index) => (
            <div className="item" key={index} style={{ '--position': index + 1 }}>
              <img
                src="https://media-hosting.imagekit.io//d25ae76ce70e4730/WhatsApp%20Image%202025-01-25%20at%2012.52.06_a651c8f4.jpg?Expires=1832397797&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=xitSGk369TySDpZWjfrafY0HNumusf5RadElyqfRlZReWt2M1Jgs7lcvilXVLmB5CGQyLBQzeD5VrDhyHA-NwfVdnvnPW6P8RZTUQacd3ZxhdtSpwSgV2ETyezr6Qlua9crTHVSezpBx4mSDAIXWhMVYU2BUgMA19UqZNbc5-95evAbRPGD4C7SujPJBRinsLrjITvRN57CBim~9282BguH90C97bHrAA6Un5cnlCDI4NJhx5QNc8HWQKgwHtzGfQ07gcwFklxhjcsSxGoi3xJxP0MD8nzTFGV9S7epBp6rM3yoTlhM4HtRhpYY0nmNDAP-Yxlpq33yW01jPrabEkA__"
                alt={`Avatar ${index + 1}`}
              />
              <img
                src="https://media-hosting.imagekit.io//632d5904121b4409/WhatsApp%20Image%202025-01-25%20at%2012.52.04_1822c3cd.jpg?Expires=1832397797&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=FvErTPo9EjvEVXCe3jSscKCmHsJVGnPvNadkkVRNxF6wtPaz~VVDE62L2QT38WKMcv~ecIPT9SbYPflCknTP1m4Hykav7dGV3miHleZYoLLzpfkq1UzQz0F8IA0S4WWMvfOSHPlzmyoaK~PYD2eHEmPh1WyantBzLQg9TnIXTXAuqbzWATzQuwL6G8NZCaPtqy3OLSX6Ealf1O1J3D8ps3w9MwnPf1aPnsNJItehsgRXOMovz5nRllXCTSncXN4aXIeSAFCf0ENCujvCyB23~oMntfbs-WxFmclXreJVmoiU-IxHg9uuYfaLhrfICP0kr0njRSDU4bFFJZ5n0tEdtA__"
                alt={`Avatar ${index + 1}`}
              />
              <img
                src="https://media-hosting.imagekit.io//a7ffa736916b4c21/WhatsApp%20Image%202025-01-25%20at%2012.52.05_6225e457.jpg?Expires=1832397797&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fpo1Wv1qpKMfgz4P0HR7oiOacYPxecdS1P4wiTXLG14WHQoP6wcMZdTajHUyOlhIKzA71fNKbSwb2C6u57pVJl5hot1XR3XRhU4wYAChC7FfbiOUNM3WrIGVmFY4xLnlpYJsfFU4cMnFijBO5l-nKPwfzJ~R8xnGBsTkcnFl8R9PIowUT4GIK7gmDMQifHbPnk5BQ54Y8RvE-Jc84xu6pnHtr8Q1IO4pX1HyEYyxBtYXPnVcVdVxGTTDc8Zc37xLNBxGqjDOPUxQiKzBgkFh7gNzreH4Y3uS0gmANbbWEe51cXP2vV~~XqePCrKDfZEdl5MPHR3ugSMxhGlgGd6cIQ__"
                alt={`Avatar ${index + 1}`}
              />
              <img
                src="https://media-hosting.imagekit.io//19f1fd7e4a7f474c/WhatsApp%20Image%202025-01-25%20at%2012.52.06_9a0390cc.jpg?Expires=1832397797&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MEtweKoJrFKjZG-dkvRRJFdo1mxbp0BzP8BsQNKvZ91PG8U~MhsjPzUMkequuIAFwh21LByhrHsr~zn8rMmIOlNrgSikjoY4X5giaQZTAy7Eg7HVxTraTYLcDTAIMnBJ8NWI5Z34dA5D85lNQ~ojzviHL5lXlSUUtB2QUmDn~WuVD0hktT68K~TWFbpHvutEuspU2rYqic91Cvcuioaeg1-s3ZNJFc2Phhr622SUIFL0un0MvMyXnvgdlWyTLZ-5a-Y29GWDzwo3c9Il0BTVhlnybqzVDoAur9HKsMlZ5QA0Bbp~09RsWfYmWOmGfZAHSK4BXQRy4UTVgQech4gKrA__"
                alt={`Avatar ${index + 1}`}
              />
              <img
                src="https://media-hosting.imagekit.io//0fefec4318254cd7/robo-war.jpg?Expires=1832391930&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=K7IMWin9FzMfBTUNemTBpb3xtVkLo0X8YL3k2egM7Wvx3nJQFwO1zEBmVRkDaD5ORVqVGkAhrh-dDh4n~7nvT1bIlJKFuqR4FAiSMYr3GzaLtS4FuwVDcLPv4sWV6bZD0P2iIuIc8-jS4VGdshUYgSzcczkpxMIDORLrwQVLzuayg0p82FpOH9TaABuL-Ogw~ObIoJ1gVkiq3qrukszre4QYiti9I-xQq17YYT-b1nMRQIn4tu8IZohtqmKc7Lf9-kA13Fr1~KP5a5b4GPnK7uglObniTtyfnyW7ELCTWPNYuXHezv~ox1FyIhdUkQD4GLuOwIuykdTpbD83FmnwbQ__"
                alt={`Avatar ${index + 1}`}
              />
              <img
                src="https://media-hosting.imagekit.io//8e3bfdcbb3914af1/soccer.png?Expires=1832391930&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wo41oukmW6Lq3ZeQ4QbyGzrMDzlR5IPzkY1DPCH8JrDndQIZxZq6Wo4xrVCAGDiW8PBUFYq8mGWsQQckoNk0ilGqpC0uyaR-Mn-p6ESKQW2iOniaDNdNwBqO9BdQMcYfbfTrHdYj7gDisz4Gst3Fe0088p4pYST-pIljD-XVXPHm7FPxED5Ub9LhcCFoFDVJStnFM3AvUlpFftY8iO5MIH69RxPtO1klL7V5BNHeJ2wRiTZkvNLfk4osZne5wwNk0uGlXlF8WM97YQ-lLksbuV5zSCnF97LHH943TK8H42rldwvBRskK-B56CFLyShI7Gsy4xoUD28xPqAfH0xK4ug__"
                alt={`Avatar ${index + 1}`}
              />
              <img
                src="https://media-hosting.imagekit.io//59c1e9e359b34f36/exhibition.jpg?Expires=1832391930&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=W3RMmUS3j4J2e06JmuXWLjbNORQVRahj5Nqa88TQIbobKXQ1iZrO6QBcqOxUw5oB-Jbb1HKvKpM~hhuNI13gBiAqM1uqo4NFr6mOtQPdHOCbQJIz8fK6fpv8tvF26smO6T4005pHvzkjBbUgN5WgQ107XzB5D3n7prjRRyVqmWkJUfpIU96OPpfT3pCPWgARz6XgLjESUedCzR8KOW6uvLo0EUREMchHbUyQFdb9QPqATBAb1GhbC-C~iZFOzogPX~N7uACCYmRBfn2OD5CWPD7yMlV2rMKZ90O4T3l1k-~77UuJ~g7XoJL1lVEi4Mz6ZNMKhyCRvn5StGSnLP6Tew__"
                alt={`Avatar ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
