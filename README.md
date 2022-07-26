# Context API

```javascript
<ColorContext.Consumer></ColorContext.Consumer>

<ColorContex.provider value={}></ColorContex.provider>
```
provider를 사용할 때는 value 값을 **꼭** 명시해줘야 한다.(안그러면 오류남)

Context에 있는 값을 사용하는 방법 3가지

1. Consumer를 사용하는데
2. useContext Hook (함수형 컴포넌트)
3. static contextType (클래스형 컴포넌트)

static contextType은 잘 쓰이지 않는다.

마우스 우클릭 이벤트
```javascript
// 마우스 오른쪽 버튼 클릭 이벤트
onContextMenu={e => {
  e.preventDefault();
  actions.setSubcolor(color);
}}
```
`e.preventDefault();` 는 원래 onContextMenu의 기능을 무시하게 해준다.





