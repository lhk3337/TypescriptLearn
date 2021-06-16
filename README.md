# TypescriptLearn

<img src="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/typescript-3776AB.svg?&style=for-the-badge&logo=Typescript&logoColor=white" />

<a href="https://nomadcoders.co/typescript-for-beginners/lobby"><img src ='https://nomadcoders.co/m.svg' width='20px' />Typescript로 블록체인 만들기</a>를 통해 Typescript를 익숙하게 사용하기

<br/>

# 배우는 이유 ❓

#### 현재 프로젝트를 TypeScript를 사용하는데, 프로젝트를 진행하는데 아직 TypeScript가 익숙하지 않아서, 코드를 이해하는데 많은 어려움을 겪고 있음.

<br/>

# Notes 📝

## TypeScript란?

#### Typed 언어, 어떤 종류의 변수와 데이터 인지 설정 해줘야 함.

<br/>

## 에러 발생 ❌

```typescript
const sayHi = (name, age, gender) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age); //argument 갯수가 달라서 에러 발생, js에서는 에러 발생하지 않고 undefined출력함
```

#### 선택적인 파라미터 설정

```typescript
const sayHi = (name, age, gender?) => {
  // 매개변수 끝에 ?를 붙이면 선택적 매개변수로 설정
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi(name, age); //에러 발생하지 않고, gender는 undefined로 출력함
```
