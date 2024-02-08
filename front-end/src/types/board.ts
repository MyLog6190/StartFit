import { atom } from "recoil";

interface IBoardCategory {
  category: ["공지사항", "자유게시판", "이벤트", "질문&답변", "인증하기"];
}

interface IBoard {
  id: number;
  userId?: string;
  writer: string;
  profileImg: string;
  categody?: string;
  title: string;
  content?: string;
}

export const popularList = atom<IBoard[]>({
  key: "popularPost",
  default: [
    {
      id: 1,
      userId: "a@m.com",
      writer: "user1",
      profileImg: "",
      title: "엄청나게 긴 제목1",
      content:
        "엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용",
    },
    {
      id: 2,
      userId: "b@m.com",
      writer: "user2",
      profileImg: "",
      title: "엄청나게 긴 제목2",
      content: "제목이 곧 내용",
    },
    {
      id: 3,
      userId: "c@m.com",
      writer: "user3",
      profileImg: "",
      title: "엄청나게 긴 제목3",
      content: "짧은 글",
    },
    {
      id: 4,
      userId: "d@m.com",
      writer: "user4",
      profileImg: "",
      title: "엄청나게 긴 제목4",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },

    {
      id: 5,
      userId: "e@m.com",
      writer: "user5",
      profileImg: "",
      title: "엄청나게 긴 제목5",
      content:
        "엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용",
    },
    {
      id: 6,
      userId: "f@m.com",
      writer: "user6",
      profileImg: "",
      title: "엄청나게 긴 제목6",
      content: "제목이 곧 내용",
    },
    {
      id: 7,
      userId: "g@m.com",
      writer: "user7",
      profileImg: "",
      title: "엄청나게 긴 제목7",
      content: "짧은 글",
    },
    {
      id: 8,
      userId: "h@m.com",
      writer: "user8",
      profileImg: "",
      title: "엄청나게 긴 제목8",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 9,
      userId: "i@m.com",
      writer: "user9",
      profileImg: "",
      title: "엄청나게 긴 제목9",
      content:
        "엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용",
    },
    {
      id: 10,
      userId: "j@m.com",
      writer: "user10",
      profileImg: "",
      title: "엄청나게 긴 제목10",
      content:
        "엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용엄청나게 긴 내용",
    },
    {
      id: 11,
      userId: "l@m.com",
      writer: "user11",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
  ],
});

const latestPost = atom<IBoard[]>({
  key: "latestPost",
  default: [
    {
      id: 12,
      userId: "m@m.com",
      writer: "user12",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 13,
      userId: "n@m.com",
      writer: "user13",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 14,
      userId: "o@m.com",
      writer: "user14",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 15,
      userId: "p@m.com",
      writer: "user15",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 16,
      userId: "q@m.com",
      writer: "user16",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 17,
      userId: "r@m.com",
      writer: "user17",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 18,
      userId: "s@m.com",
      writer: "user18",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 19,
      userId: "t@m.com",
      writer: "user19",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 20,
      userId: "u@m.com",
      writer: "user20",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
    {
      id: 21,
      userId: "w@m.com",
      writer: "user21",
      profileImg: "",
      title: "엄청나게 긴 제목11",
      content: "중간 정도로 긴 내용 중간 정도로 긴 내용 중간 정도로 긴 내용",
    },
  ],
});
