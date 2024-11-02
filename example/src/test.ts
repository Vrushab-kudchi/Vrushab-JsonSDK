import JsonPlaceholder from "json-placeholder-node-sdk";

const client = new JsonPlaceholder({});

client.getPosts().then((res) => {
  console.log(res);
});
