import TheSearch from "../../components/the-search.vue";
import TheMenu from "../../components/the-menu.vue";
import CardnewsUserList from "../../components/cardnews-user-list.vue";
import CompanyMyList from "../../components/company-my-list.vue"

export default {
  components: {
    TheSearch,
    TheMenu,
    CompanyMyList,
    CardnewsUserList
  },

  data() {
    return {
      UserMyPage: [
        {
          logo:
            "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
          name: "네이버",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo:
            "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
          name: "네이버",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo:
            "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
          name: "네이버",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo:
            "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
          name: "네이버",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
        {
          logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
          name: "카카오",
        },
        {
          logo:
            "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
          name: "쿠팡",
        },
      ],
      mypages: [
        [
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
        ],
        [
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://media.glassdoor.com/sqll/914956/coupang-squarelogo-1550255639870.png",
            name: "쿠팡",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
          {
            logo:
              "https://blog.kakaocdn.net/dn/OQafi/btqKspax5Yo/HVKIgZo8EQZEbGzrXOfwI1/img.jpg",
            name: "네이버",
          },
          {
            logo: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
            name: "카카오",
          },
        ],
      ],
    };
  },
};
