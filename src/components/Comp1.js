import React, {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import "./Comp1.css";

const Comp1 = ({ val }) => {
  console.log("🚀 ~ Comp1 ~ val:", val);
  const [isloading, setIsloading] = useState(false);

  const testFunction = () => {
    console.log("test function");
  };

  const test = useMemo(() => {
    testFunction();
  }, []);

  const [user, setUser] = useState();

  const fetchRandimUser = () => {
    setIsloading(true);

    fetch("https://randomuser.me/api/")
      .then((x) => x.json())
      .then((data) => {
        console.log("🚀 ~ Comp1 ~ data:", data);
        setUser(data?.results?.[0] ?? null);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  useEffect(() => {
    fetchRandimUser();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: 60,
            height: 110,
            width: 110,
            borderWidth: 2,
            borderColor: "white",
            backgroundColor: "pink",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            margin: 20,
          }}
        >
          {user?.picture?.large && (
            <img
              src={user?.picture?.large}
              style={{
                borderRadius: 50,
                height: 100,
                width: 100,
                borderWidth: 2,
                borderColor: "white",
              }}
              loading="lazy"
              alt="Loading"
            />
          )}
        </div>
        <p style={{ margin: 10, fontWeight: "bold" }}>
          {user?.name?.first + " " + user?.name?.last}
        </p>
      </div>
      <div
        className="my-button"
        style={{
          height: 30,
          backgroundColor: "green",
          padding: 10,
          borderRadius: 5,
          width: "100%",
          alignSelf: "stretch",
          marginTop: 30,
          marginBottom: 30,
        }}
        onClick={fetchRandimUser}
      >
        {isloading ? "Loading A Random User" : "Fetch Random User"}
      </div>
    </div>
  );
};

export default Comp1;
