/*
arr = [1, 2, 3, 4, 5];

arr.map((num, index) => {
  return num;
});
// [1,2,3,4,5]

arr.map((num, index) => {
  return index;
});
// [0,1,2,3,4]

const arr = [
    {title:"aa", number:1},
    {title:"bb", number:2}]

arr.map((el) => {
  return <Card title={el.title} number={el.number} />;
});

state가 변하면 render-> jsx가 새로 리턴된다.

객체에 순서가 없다
키값으로 접근만할뿐 키값이 순서대로 나타나는 것은 아니다.number


렌더가 안되도될떄 렌더를 막아주는것- 최적화

