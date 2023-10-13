import { Program } from "../types/Program.ts";

const programs: Program[] = [
  {
    id: 1,
    iconName: "radio",
    title: "オープニング",
    personalityLastNames: ["石丸", "草竹", "下津", "外山", "熊倉"],
    overview: "ついに始まる！2023年吉野研ゼミ旅行ラジオをお届けするパーソナリティをご紹介！",
    playtime: 10,
    day: 1,
  },
  {
    id: 2,
    iconName: "zany_face",
    title: "変な人がいてんねん",
    personalityLastNames: ["石丸", "下津", "外山"],
    overview:
      "吉野研にはまともなひとがいない。そんな噂を証明するエピソードが...？",
    playtime: 0,
    day: 1,
  },
  {
    id: 3,
    iconName: "postbox",
    title: "#吉野研",
    personalityLastNames: ["草竹", "外山"],
    overview: "吉野研では小さなことでも毎日何かが起こってる。そんな何かを経験した誰かのつぶやきを覗いてみよう！",
    playtime: 0,
    day: 1,
  },
  {
    id: 4,
    iconName: "face_in_clouds",
    title: "あなたにとってイケメンorかわいいとは？",
    personalityLastNames: ["草竹", "下津", "熊倉"],
    overview: "人によって魅力的に感じる対象って違いますよね…。結局、イケメン・かわいいってどんな人なのか！ここで明らかにしてみせましょう！",
    playtime: 0,
    day: 1,
  },
  {
    id: 5,
    iconName: "revolving_hearts",
    title: "恋愛について語りたい",
    personalityLastNames: ["石丸", "下津"],
    overview: "シス工でも...吉野研でも...恋愛はしたい！そんな若者たちのお悩みを、吉野研恋愛マスター？の二人が解決していく！",
    playtime: 0,
    day: 1,
  },
  {
    id: 6,
    iconName: "index_pointing_at_the_viewer",
    title: "ゼミ旅行までそれ正解！",
    personalityLastNames: ["石丸", "草竹", "下津", "外山"],
    overview:
      "M2の4人であの名番組を再現！バスの視聴者が納得する回答を出せるのか、M2の知識と発想力が試される...!!",
    playtime: 0,
    day: 1,
  },
  {
    id: 7,
    iconName: "fire",
    title: "アツい趣味を教えてくれ",
    personalityLastNames: ["石丸", "外山"],
    overview: "吉野研のアツい趣味をもった人からのアツいお便りをご紹介！趣味に生きる石丸と趣味のない外山が雑に語ります。",
    playtime: 0,
    day: 2,
  },
  {
    id: 8,
    iconName: "old_man",
    title: "草竹＆吉野先生のぶっちゃけトーク",
    personalityLastNames: ["草竹", "吉野先生"],
    overview: "吉野研で犬猿の仲？とされている草竹と吉野先生が奇跡の対談！一体どのような化学反応が生まれるのか...?",
    playtime: 0,
    day: 2,
  },
  {
    id: 9,
    iconName: "beer_mug",
    title: "ほろ酔い雑談",
    personalityLastNames: ["草竹", "下津"],
    overview: "吉野研ニコイチと言われるほど、大の仲良しコンビ、草竹＆下津！お酒も入って、ホテルの収録で、イチャイチャしちゃうかも🙈",
    playtime: 0,
    day: 2,
  },
  {
    id: 10,
    iconName: "sports_medal",
    title: "吉野研〇〇ランキング",
    personalityLastNames: ["石丸", "草竹", "下津", "外山"],
    overview: "吉野研で一番〇〇な人は誰だ！？自分の意外な印象が分かるかも！選ばれるのが良いこととは限らない...",
    playtime: 0,
    day: 2,
  },
  {
    id: 11,
    iconName: "radio",
    title: "エンディング",
    personalityLastNames: ["石丸", "草竹", "下津", "外山", "熊倉"],
    overview: "全て録音が終えたパーソナリティが語る感想戦(?)。心残りがある人がいるとかいないとか...？",
    playtime: 0,
    day: 2,
  },
];

export default programs;
