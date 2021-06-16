# TypescriptLearn

<img src="https://img.shields.io/badge/javascript-F7DF1E.svg?&style=for-the-badge&logo=javascript&logoColor=black" /> <img src="https://img.shields.io/badge/typescript-3776AB.svg?&style=for-the-badge&logo=Typescript&logoColor=white" />

<a href="https://nomadcoders.co/typescript-for-beginners/lobby"><img src ='https://nomadcoders.co/m.svg' width='20px' />Typescript로 블록체인 만들기</a>를 통해 Typescript를 익숙하게 사용하기

<br/>

# Index

- [배우는 목적 ❓](#배우는-목적-)
- [실행법 ➡️](#실행법-%EF%B8%8F)
- [Notes 📝](#notes-)

# 배우는 목적 ❓

#### 현재 프로젝트를 TypeScript를 사용하는데, 프로젝트를 진행하는데 아직 TypeScript가 익숙하지 않아서, 코드를 이해하는데 많은 어려움을 겪고 있음.

<br/>

# 실행법 ➡️

- 터미널에서 yarn init
- 터미널에서 yarn global add typescript(typescript 설치)
- 상위 폴더에 tsconfig.json 생성
  ```json
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "sourceMap": true
    },
    "include": ["index.ts"],
    //어떤 파일들이 컴파일 과정에 포함되는지 typescript에 알려주는 기능
    "exclude": ["node_modules"]
  }
  ```
- package.json에서 추가
  ```json
    "scripts": {
    "start": "node index.js",
    "prestart": "tsc"
    }
  ```
- 터미널에서 yarn start하면 index.ts가 index.js로 컴파일 됨

<br/>

# Notes 📝

## TypeScript란 ⁉️

#### Typed 언어, 어떤 종류의 변수와 데이터 인지 설정 해줘야 함.

<br/>

## 에러 발생 ❌

#### 파라미터 갯수가 맞지 않을 경우

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

## Types

#### type이 다른 경우 (매개변수와 전달인자의 type이 다른경우 typescript에서 에러 발생)

```typescript
const sayHi = (name: string, age: number, gender: string) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};
sayHi("Holime", "24", "male"); //Argument of type 'string' is not assignable to parameter of type 'number'.
export {};
```
