import http from "k6/http";

export function setup() {
  console.log("Aqui é o setup");
  const res = http.get("https://httpbin.test.k6.io/get", {
    tags: {
      my_tag: "I'm a tag",
    },
  });
  return { data: res.json() };
}

export function teardown(data) {
  // console.log(JSON.stringify(data));
  console.log("Aqui é o teardown");
}

export default function (data) {
  // console.log(JSON.stringify(data));
  console.log("Aqui é o main");
}
