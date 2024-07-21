function Map() {
  const arr = [1, 2, 3];
  const res = arr.map(function (val) {
    // [<div>Hello 1<div>,<div>Hello<div>,<div>Hello<div>]      ]
    return <div>Hello {val}</div>;
  });

  return <div>{res}</div>;
}

export default Map;
