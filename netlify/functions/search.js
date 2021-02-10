exports.handler = async function (event, context) {
  return {
    statusCode: 301,
    body: JSON.stringify({ message: "Hello World" })
  };
}