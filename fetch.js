async function getData() {
  let response = await fetch("https://dummyjson.com/test");
  let data = await response.json();
  console.log(data);
}
getData();

async function postData() {
  let response = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "I am in love with someone.",
      userId: 5,
      /* other post data */
    }),
  });
  let data = await response.json();
  console.log(data);
}
postData();
