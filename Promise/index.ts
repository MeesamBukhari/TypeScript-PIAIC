import "isomorphic-fetch";
fetch("https://meesambukharipk.web.app")
  .then((response) => {
    console.log(response.status);
  })
  .catch((reason) => {
    console.log("ERROR", reason);
  })
  .finally(() => {
    console.log("END");
  });