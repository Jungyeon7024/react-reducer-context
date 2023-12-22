// 부모 컨포넌트에서 createContext로 생성한 Context객체를 자식 컴포넌트에서 쉽게 사용할 수 있도록 만들어진 함수
// useContext를 사용하면 데이터를 전달하기 위한 prpos를 사용하지 않아도됨
  //useReducer를 사용해서 상태와 디스패치 함수를 얻을 예정
  //counterReducer : 현재 상태와 액션값을 받아서 다음 상태를 결정하는데 사용
  // 위 counterReducer 함수에서는 switch 문을 활용해서 값 조정을 함
  //useReducer 상태와 디스패치 함수를 생성
  //첫 번째 매개변수로 counterReducer 받고
  //두 번째 매개변수로 { count: 0 }을 줘서 초기 값을 0으로 설정
  //dispatch : 액션을 발생시키는데 사용되는 함수
  //위에서 switch문 안에 있는 case 가 선택 되면 선택된 상태를 return해서
  //업데이트를  처리