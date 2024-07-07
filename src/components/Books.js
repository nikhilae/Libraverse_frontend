function Books() {
  var str = "http://localhost:8080/api/books";
  var response = fetch(str);

  console.log(response);

  return <div></div>;
}

export default Books;
