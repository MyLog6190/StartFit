# StartFit

## 프로젝트 목적

운동을 처음하는 초보자는 관련 지식이 부족하기 때문에 초보자가 쉽게 운동을 할 수 있도록 도움을 주는 기능을 제공하여 초보자들이 쉽게 자신의 운동 루틴을 만들고 관리할 수 있도록 하는 웹사이트 개발

## 프로젝트 방향성

**운동 설명**

- 초보자가 어떤 운동인지 알기 쉽게 알 수 있게 운동 방법과 설명을 제공

**운동 계획**

- 운동계획을 짤 수 있는 기능을 제공하고, 어떤 운동을 해야할지 잘 모르는 초보자에게 운동 프로그램을 제공

## 프로젝트 내용

| 내용                 | 설명                                                 |
| -------------------- | ---------------------------------------------------- |
| **로그인**           | 회원가입을 통한 로그인과 소셜계정을 통한 로그인 기능 |
| **운동 설명**        | 운동 부위, 운동 방법, 운동 설명을 볼 수 있도록 함    |
| **운동 루틴 생성**   | 운동 날짜를 지정하여 운동 루틴을 짤 수 있는 기능     |
| **운동 루틴 추천**   | 알려져 있는 운동 루틴을 실력에 맞게 추천             |
| **운동 수행률 확인** | 계획한 운동 중 얼마나 수행했는지 볼 수 있는 기능     |

---

## 기술 스택

| 구분         | 기술                                                                       |
| ------------ | -------------------------------------------------------------------------- |
| **IDE**      | Visual Studio Code                                                         |
| **FrontEnd** | React 18.^, TypeScript 18.^, Styled-Component, Recoil, Frame-Motion        |
| **BackEnd**  | JAVA 17, Spring Boot 3.2.^, Gradle, Spring Data JPA, Lombok, Security, JWT |
| **DB**       | MySQL                                                                      |

---

## 페이지

| 페이지      | 설명                                                    | 이미지                                                                                                                                                                                                                                                                                                                   |
| ----------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **HOME**    | START_FIT의 제공하는 컨텐츠를 볼 수 있는 홈 화면 페이지 | ![HOME](https://github.com/MyLog6190/StartFit/assets/92650448/a092e489-9569-436a-b6c2-93e5c548d215)                                                                                                                                                                                                                      |
| **LOGIN**   | 로그인 페이지                                           | ![LOGIN](https://github.com/MyLog6190/StartFit/assets/92650448/220c3505-a0de-49d1-a31a-4eda1de0752a)                                                                                                                                                                                                                     |
| **Library** | 원하는 운동의 정보를 확인할 수 있는 페이지              | ![Library1](https://github.com/MyLog6190/StartFit/assets/92650448/5e1198e0-9f5d-4f96-ae77-8374a5ea3f7a) <br> ![Library2](https://github.com/MyLog6190/StartFit/assets/92650448/09d7fc79-7681-4d3f-85dd-40e12a84b49a)                                                                                                     |
| **PLAN**    | 운동 계획을 짤 수 있는 페이지                           | ![PLAN1](https://github.com/MyLog6190/StartFit/assets/92650448/cfe00eb2-f9f2-425f-9331-f68de52ecc81) <br> ![PLAN2](https://github.com/MyLog6190/StartFit/assets/92650448/00a2e883-3bf5-4e86-9a1f-83f99e773241) <br> ![PLAN3](https://github.com/MyLog6190/StartFit/assets/92650448/0223d232-c68d-43b6-9f74-ccb39ce2d9e3) |
| **MY_PAGE** | 계획한 운동 수행률을 확인할 수 있는 페이지              | ![MY_PAGE](https://github.com/MyLog6190/StartFit/assets/92650448/3b9ac1e7-7461-4cf8-8e0c-7981be40964c)                                                                                                                                                                                                                   |

---

## 설치 및 실행 방법

```bash
# 프로젝트 클론
git clone https://github.com/MyLog6190/StartFit.git

# 프로젝트 디렉토리로 이동
cd StartFit

# 프론트엔드 패키지 설치
cd frontend
npm install

# 백엔드 패키지 설치
cd ../backend
./gradlew build

# 프론트엔드 서버 실행
cd ../frontend
npm start

# 백엔드 서버 실행
cd ../backend
./gradlew bootRun
```
