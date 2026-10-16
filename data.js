// 2026 昆蟲同樂會 攤位資料
// ─────────────────────────────────────────────
// 每個攤位欄位說明：
//   no        攤位編號（對應地圖）
//   name      攤位名稱（照官方對照表）
//   cat       分類："beetle" 甲蟲 / "reptile" 爬蟲 / "other" 其他（鼠婦、多足、礦石、飾品、植物…）
//             同時賣兩種的寫成陣列，例如 ["beetle", "reptile"]
//   items     參展品項 / 主要販售內容（陣列）
//   lottery   抽抽樂：true 有 / false 確定沒有 / null 尚未確認
//   lotteryNote 抽抽樂說明（價格、獎項），選填
//   links     粉專 / IG / 網站，選填
//   verified  品項是否已找到公開資料佐證（false = 只依攤位名稱推測）
//   note      備註，選填
//   species   現場蟲種（陣列）：{name, sci, stage, size, price}，依活動貼文圖片抄錄
//   otherItems 其他非蟲種品項，選填
//
// 想更新資料：直接改這個檔案、commit，Vercel 會自動重新部署。
// ─────────────────────────────────────────────

window.BOOTHS = [
  {
    "no": 1,
    "name": "甲蟲飼集",
    "cat": "beetle",
    "items": [
      "大鍬、大扁、叉角等甲蟲飼育個體",
      "2025 台灣國際昆蟲博覽會 品項速報（現場取貨）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/beetlefair"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/beetlefair_tw/"
      }
    ],
    "verified": true,
    "species": [],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 2,
    "name": "蟲林野售",
    "cat": "beetle",
    "items": [
      "無敵風火輪 抽抽樂獎品：全部成對成蟲（金獎：大家可留言點想要的蟲）",
      "甲蟲、鍬形蟲、兜蟲（飼育個體）",
      "蝴蝶標本、天牛標本"
    ],
    "lottery": true,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/insectjungle"
      },
      {
        "label": "官網",
        "url": "https://insect-jungle.com.tw"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/insectjungle/posts/pfbid0CnrVqHTxaTZnToaC751L6E8mEjP1PyX7GCWjNd2RJ57KfvDRsDjEnWrpa6qbHmmvl"
      }
    ],
    "verified": true,
    "note": "台北信義區實體店，另有網路商店",
    "fromEventPost": true,
    "lotteryNote": "無敵風火輪抽抽樂：$1,500/抽（FB 10/13 貼文圖片），獎品全部為成對成蟲；金獎可留言點想要的蟲。",
    "species": [],
    "otherItems": [
      "無敵風火輪 抽抽樂（$1,500/抽，獎品全部為成對成蟲，品種未在圖片列出）"
    ],
    "listFound": false,
    "source": "https://www.facebook.com/insectjungle/posts/pfbid0CnrVqHTxaTZnToaC751L6E8mEjP1PyX7GCWjNd2RJ57KfvDRsDjEnWrpa6qbHmmvl",
    "detail": {
      "source": "https://www.facebook.com/insectjungle/posts/pfbid0CnrVqHTxaTZnToaC751L6E8mEjP1PyX7GCWjNd2RJ57KfvDRsDjEnWrpa6qbHmmvl",
      "sourceLabel": "FB 蟲林野售 活動貼文",
      "info": [
        "獎品全部為成對成蟲；金獎未列物種"
      ],
      "promos": [
        "無敵風火輪抽抽樂 $1,500/抽"
      ]
    }
  },
  {
    "no": 3,
    "name": "陪小孩養甲蟲 NG Reptile shop",
    "cat": "beetle",
    "items": [
      "活體甲蟲（扭蛋/抽抽樂獎品，A獎 $5,000以上 等級）",
      "飼育用品（折抵 $350/張）",
      "現場可直接選購甲蟲"
    ],
    "lottery": true,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=61572145584328"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/ng_reptile/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "lotteryNote": "100% 活體甲蟲扭蛋機 (抽抽樂) for 2026 昆蟲同樂會 松菸 3號攤位: 150抽限定，單抽 $400 / 三抽 $1,100；A獎 $5,000+ 1抽、B $2,500+ 2抽、C $1,000+ 15抽、D $500+ 50抽、E $500以下 82抽；三張同級可升級；每張獎券可折抵 $350 飼育用品. Posted 17h ago (IG DegwX3dk_vI).",
    "source": "https://www.instagram.com/ng_reptile/p/DegwX3dk_vI/",
    "species": [
      {
        "name": "南洋大兜 CCC",
        "stage": "成蟲",
        "size": "110 mm",
        "note": "成對/單母"
      },
      {
        "name": "神馬大兜",
        "stage": "成蟲",
        "size": "87 mm",
        "note": "成對"
      },
      {
        "name": "美西白兜",
        "stage": "成蟲",
        "size": "63 mm",
        "note": "成對"
      },
      {
        "name": "GP 叉角兜",
        "stage": "成蟲",
        "note": "單公"
      },
      {
        "name": "極太泰國姬兜",
        "stage": "成蟲",
        "size": "72 mm",
        "note": "成對"
      },
      {
        "name": "佛羅倫斯姬兜",
        "stage": "成蟲",
        "size": "79 mm",
        "note": "成對"
      },
      {
        "name": "棕毛姬兜",
        "stage": "成蟲",
        "note": "成對"
      },
      {
        "name": "越南黃五角兜",
        "stage": "成蟲",
        "note": "成對/單母"
      },
      {
        "name": "歌利亞女王花金龜 GG",
        "stage": "成蟲",
        "note": "成對"
      },
      {
        "name": "黑鍋角金龜",
        "stage": "成蟲",
        "note": "成對"
      },
      {
        "name": "烏干達花金龜",
        "stage": "成蟲",
        "note": "單母"
      },
      {
        "name": "彩虹鍬",
        "stage": "成蟲",
        "note": "成對/單母"
      },
      {
        "name": "印尼金鍬",
        "stage": "成蟲",
        "note": "成對/單母"
      },
      {
        "name": "澳洲花鍬",
        "stage": "成蟲",
        "note": "成對/單公"
      },
      {
        "name": "紅鹿深山鍬形蟲",
        "stage": "成蟲",
        "size": "60 mm",
        "note": "成對"
      },
      {
        "name": "貓太深山鍬形蟲",
        "stage": "成蟲",
        "size": "95 mm",
        "note": "單公"
      },
      {
        "name": "高砂深山鍬形蟲",
        "stage": "成蟲",
        "note": "單公"
      },
      {
        "name": "非洲大黑艷 MT",
        "stage": "成蟲",
        "size": "86 mm",
        "note": "成對/單母"
      },
      {
        "name": "馬場黃金鬼",
        "stage": "成蟲",
        "size": "76 mm",
        "note": "成對/單母"
      },
      {
        "name": "巨顎叉角 HMM",
        "stage": "成蟲",
        "size": "100 mm",
        "note": "成對/單母"
      },
      {
        "name": "明寧瑞奇叉角",
        "stage": "成蟲",
        "size": "66 mm",
        "note": "成對"
      },
      {
        "name": "南印度霸王鬼",
        "stage": "成蟲",
        "size": "100 mm",
        "note": "成對"
      },
      {
        "name": "英特梅迪亞鬼艷",
        "stage": "成蟲",
        "note": "單母"
      },
      {
        "name": "菲萝力士鬼艷",
        "stage": "成蟲",
        "note": "單母"
      },
      {
        "name": "泰國黃金鹿角",
        "stage": "成蟲",
        "size": "61 mm",
        "note": "成對"
      },
      {
        "name": "漆黑鹿角鍬形蟲",
        "stage": "成蟲",
        "size": "58 mm",
        "note": "成對"
      },
      {
        "name": "M 島大頭（原色）",
        "stage": "成蟲",
        "size": "60 mm",
        "note": "成對"
      },
      {
        "name": "M 島大頭（綠色）",
        "stage": "成蟲",
        "size": "60 mm",
        "note": "成對"
      },
      {
        "name": "考皮細身鍬形蟲",
        "stage": "成蟲",
        "size": "53.5 mm",
        "note": "成對"
      },
      {
        "name": "CMF 美他利佛 f",
        "stage": "成蟲",
        "size": "92 mm",
        "note": "成對"
      },
      {
        "name": "CMM 美他利佛",
        "stage": "成蟲",
        "size": "93 mm",
        "note": "成對"
      },
      {
        "name": "涼村氏細身",
        "stage": "成蟲",
        "note": "成對"
      },
      {
        "name": "馬島鉗角鋸",
        "stage": "成蟲",
        "size": "53 mm",
        "note": "成對"
      },
      {
        "name": "戰神大兜幼蟲",
        "stage": "幼蟲",
        "note": "2隻"
      },
      {
        "name": "烏干達花金龜幼蟲",
        "stage": "幼蟲",
        "note": "2隻"
      },
      {
        "name": "美西白兜幼蟲",
        "stage": "幼蟲",
        "note": "2隻"
      }
    ],
    "otherItems": [
      "飼育用品（抽抽樂獎券可折抵 $350/張；3張$1,050、5張$1,750）"
    ],
    "listFound": true,
    "detail": {
      "sourceLabel": "IG @ng_reptile 抽抽樂獎項貼文（圖 2–4/4）",
      "source": "https://www.instagram.com/ng_reptile/p/DegwX3dk_vI/",
      "info": [
        "10/17–10/18 松山文創園區 2F，3號攤位（出口第一攤）",
        "100% 活體甲蟲抽抽樂：單抽 $400｜三抽 $1,100",
        "A獎 市價 $5,000 以上；B獎 市價 $2,500 以上",
        "獎品依現場獎品池物種自行選擇；尺寸為該物種本次最大尺寸，實際依個體規格與獎池區分"
      ],
      "tiers": [
        {
          "title": "抽抽樂獎項結構（共 150 抽）",
          "cols": [
            "獎項",
            "市價",
            "數量"
          ],
          "items": [
            {
              "name": "A獎",
              "qty": "$5,000 以上",
              "spec": "1 抽"
            },
            {
              "name": "B獎",
              "qty": "$2,500 以上",
              "spec": "2 抽"
            },
            {
              "name": "C獎",
              "qty": "$1,000 以上",
              "spec": "15 抽"
            },
            {
              "name": "D獎",
              "qty": "$500 以上",
              "spec": "50 抽"
            },
            {
              "name": "E獎",
              "qty": "$500 以下",
              "spec": "82 抽"
            }
          ]
        },
        {
          "title": "A獎 可選獎品清單（市價 $5,000 以上）",
          "items": [
            {
              "name": "美他利佛細身赤 CMM",
              "size": "93 mm",
              "spec": "成對（紀錄血）"
            },
            {
              "name": "考皮細身鍬形蟲",
              "size": "53.5 mm",
              "spec": "成對"
            },
            {
              "name": "紅鹿深山鍬形蟲",
              "size": "60 mm",
              "spec": "成對"
            },
            {
              "name": "M 島大頭（綠色）",
              "size": "60 mm",
              "spec": "成對"
            },
            {
              "name": "馬場黃金鬼",
              "size": "76 mm",
              "spec": "成對"
            },
            {
              "name": "非洲大黑艷 MT",
              "size": "86 mm",
              "spec": "成對"
            },
            {
              "name": "南印度霸王鬼",
              "size": "100 mm",
              "spec": "成對"
            },
            {
              "name": "馬島鉗角鋸",
              "size": "72 mm",
              "spec": "成對"
            },
            {
              "name": "神馬大兜",
              "size": "87 mm",
              "spec": "成對"
            }
          ]
        },
        {
          "title": "B獎 可選獎品清單（市價 $2,500 以上）",
          "items": [
            {
              "name": "馬場黃金鬼",
              "size": "73 mm",
              "spec": "成對"
            },
            {
              "name": "非洲大黑艷 MT",
              "size": "82 mm",
              "spec": "成對"
            },
            {
              "name": "巨顎叉角 HMM",
              "size": "100 mm",
              "spec": "成對"
            },
            {
              "name": "M 島大頭（原色）",
              "size": "60 mm",
              "spec": "成對"
            },
            {
              "name": "極太泰國姬兜",
              "size": "72 mm",
              "spec": "成對"
            },
            {
              "name": "神馬大兜",
              "size": "84 mm",
              "spec": "成對"
            },
            {
              "name": "美西白兜",
              "size": "63 mm",
              "spec": "成對"
            },
            {
              "name": "南洋大兜 CCC",
              "size": "110 mm",
              "spec": "成對"
            }
          ]
        }
      ],
      "groups": [
        {
          "category": "兜蟲",
          "items": [
            {
              "name": "南洋大兜 CCC",
              "size": "110 mm",
              "spec": "成對/單母"
            },
            {
              "name": "神馬大兜",
              "size": "87 mm",
              "spec": "成對"
            },
            {
              "name": "美西白兜",
              "size": "63 mm",
              "spec": "成對"
            },
            {
              "name": "GP 叉角兜",
              "size": "—",
              "spec": "單公"
            },
            {
              "name": "極太泰國姬兜",
              "size": "72 mm",
              "spec": "成對"
            },
            {
              "name": "佛羅倫斯姬兜",
              "size": "79 mm",
              "spec": "成對"
            },
            {
              "name": "棕毛姬兜",
              "size": "—",
              "spec": "成對"
            },
            {
              "name": "越南黃五角兜",
              "size": "—",
              "spec": "成對/單母"
            }
          ]
        },
        {
          "category": "金龜",
          "items": [
            {
              "name": "歌利亞女王花金龜 GG",
              "size": "—",
              "spec": "成對"
            },
            {
              "name": "黑鍋角金龜",
              "size": "—",
              "spec": "成對"
            },
            {
              "name": "烏干達花金龜",
              "size": "—",
              "spec": "單母"
            }
          ]
        },
        {
          "category": "色龜",
          "items": [
            {
              "name": "彩虹鍬",
              "size": "—",
              "spec": "成對/單母"
            },
            {
              "name": "印尼金鍬",
              "size": "—",
              "spec": "成對/單母"
            },
            {
              "name": "澳洲花鍬",
              "size": "—",
              "spec": "成對/單公"
            }
          ]
        },
        {
          "category": "鍬形蟲",
          "items": [
            {
              "name": "紅鹿深山鍬形蟲",
              "size": "60 mm",
              "spec": "成對"
            },
            {
              "name": "貓太深山鍬形蟲",
              "size": "95 mm",
              "spec": "單公"
            },
            {
              "name": "高砂深山鍬形蟲",
              "size": "—",
              "spec": "單公"
            },
            {
              "name": "非洲大黑艷 MT",
              "size": "86 mm",
              "spec": "成對/單母"
            },
            {
              "name": "馬場黃金鬼",
              "size": "76 mm",
              "spec": "成對/單母"
            },
            {
              "name": "巨顎叉角 HMM",
              "size": "100 mm",
              "spec": "成對/單母"
            },
            {
              "name": "明寧瑞奇叉角",
              "size": "66 mm",
              "spec": "成對"
            },
            {
              "name": "南印度霸王鬼",
              "size": "100 mm",
              "spec": "成對"
            },
            {
              "name": "英特梅迪亞鬼艷",
              "size": "—",
              "spec": "單母"
            },
            {
              "name": "菲萝力士鬼艷",
              "size": "—",
              "spec": "單母"
            },
            {
              "name": "泰國黃金鹿角",
              "size": "61 mm",
              "spec": "成對"
            },
            {
              "name": "漆黑鹿角鍬形蟲",
              "size": "58 mm",
              "spec": "成對"
            },
            {
              "name": "M 島大頭（原色）",
              "size": "60 mm",
              "spec": "成對"
            },
            {
              "name": "M 島大頭（綠色）",
              "size": "60 mm",
              "spec": "成對"
            },
            {
              "name": "考皮細身鍬形蟲",
              "size": "53.5 mm",
              "spec": "成對"
            },
            {
              "name": "CMF 美他利佛 f",
              "size": "92 mm",
              "spec": "成對"
            },
            {
              "name": "CMM 美他利佛",
              "size": "93 mm",
              "spec": "成對"
            },
            {
              "name": "涼村氏細身",
              "size": "—",
              "spec": "成對"
            },
            {
              "name": "馬島鉗角鋸",
              "size": "53 mm",
              "spec": "成對"
            }
          ]
        },
        {
          "category": "幼蟲區",
          "items": [
            {
              "name": "戰神大兜幼蟲",
              "qty": "2隻"
            },
            {
              "name": "烏干達花金龜幼蟲",
              "qty": "2隻"
            },
            {
              "name": "美西白兜幼蟲",
              "qty": "2隻"
            }
          ]
        }
      ],
      "promos": [
        "三張同級獎券可升一級",
        "每張獎券送 $350 飼育耗材抵用"
      ]
    },
    "speciesSource": "event-list"
  },
  {
    "no": 4,
    "name": "太強了蟲社 Too Strong Beetle Association",
    "cat": "beetle",
    "items": [
      "活體甲蟲飼養繁殖",
      "甲蟲專業耗材製作販售",
      "甲蟲標本代工製作"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/p/%E5%A4%AA%E5%BC%B7%E4%BA%86%E8%9F%B2%E7%A4%BE-61551047883124/"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/people/%E5%A4%AA%E5%BC%B7%E4%BA%86%E8%9F%B2%E7%A4%BE-Too-Strong-Beetle-Association/61568625862292/"
      }
    ],
    "verified": true,
    "note": "基隆中山區甲蟲店",
    "species": [],
    "otherItems": [
      "活體甲蟲飼養繁殖（簡介）",
      "甲蟲專業耗材製作販售（簡介）",
      "甲蟲標本代工（簡介）"
    ],
    "listFound": false,
    "source": "https://www.facebook.com/people/%E5%A4%AA%E5%BC%B7%E4%BA%86%E8%9F%B2%E7%A4%BE-Too-Strong-Beetle-Association/61568625862292/",
    "detail": {
      "info": [
        "已確認參展，貼文未列品項（FB 公告：本週六日因參加松菸昆蟲展公休）"
      ],
      "source": "https://www.facebook.com/insectfairtw/posts/pfbid02tjgRrpk922gYxmsXdSJQ1Ta5sF514U4KBb5qQvERSseX7s4vQejf9Vuo9FF7H3yl",
      "sourceLabel": "主辦單位活動貼文（太強了蟲社分享）"
    }
  },
  {
    "no": 5,
    "name": "派噗家 PAIPUE",
    "cat": "other",
    "items": [
      "手作爬蟲娃娃（巨人守宮、紫色小丑蛙等）",
      "牽繩/手作周邊"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/muni_paipue/"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "手作爬蟲娃娃（巨人守宮、紫色小丑蛙等，布偶非活體）",
      "牽繩/手作周邊"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 6,
    "name": "異寵拍賣行",
    "cat": "other",
    "items": [
      "捕鳥蛛、蜈蚣、蠍子等節肢動物（現場展示/販售）"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=61550096980302"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/g.tarantula_tw_3.0/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/asdff_55667/p/Dd714F_FMD-/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/g.tarantula_tw_3.0/p/DRtqq2_E1kh/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "捕鳥蛛、蜈蚣、蠍子等節肢動物（展示/販售，無品項清單）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/asdff_55667/p/Dd714F_FMD-/"
  },
  {
    "no": 7,
    "name": "Multi Legged・多足蟲",
    "cat": "other",
    "items": [
      "捕鳥蛛/蜘蛛（如巴西巨人紅尾捕鳥蛛、桑義赫黑樹老虎捕鳥蛛）",
      "蜈蚣等多足類"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Threads",
        "url": "https://www.threads.com/@multi_legged"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/multi_legged/"
      }
    ],
    "verified": true,
    "note": "Threads 上有菲律賓奇異蜈蚣（Scolopendra paradoxa）等貼文",
    "species": [],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 8,
    "name": "蟑頭蛛目",
    "cat": "other",
    "items": [
      "蜘蛛、蜈蚣、蠍子等節肢動物文創周邊",
      "飼養周邊、食物蟑螂（紅蟑/杜比亞）、寵物蟑螂（馬島蟑螂）"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/nashipiku/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/nashipiku/p/DeeKyIgAQee/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [
      {
        "name": "紅蟑",
        "note": "食物蟑螂"
      },
      {
        "name": "杜比亞",
        "note": "食物蟑螂"
      },
      {
        "name": "馬島蟑螂",
        "note": "寵物蟑螂"
      }
    ],
    "otherItems": [
      "蜘蛛、蜈蚣、蠍子等節肢動物文創周邊（貼紙/畫作周邊）",
      "飼養周邊"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/nashipiku/p/DeeKyIgAQee/",
    "speciesSource": "event-mention",
    "detail": {
      "source": "https://www.instagram.com/nashipiku/p/DeeKyIgAQee/",
      "sourceLabel": "IG @nashipiku 活動貼文（8張）",
      "groups": [
        {
          "category": "周邊商品",
          "items": [
            {
              "name": "蜘蛛行李吊帶",
              "size": "5×180 cm",
              "spec": "",
              "price": "$180"
            },
            {
              "name": "蜘蛛/雞母蟲警告牌造型夾",
              "size": "6 cm",
              "spec": "一款雙面圖 (?)",
              "price": "$100"
            },
            {
              "name": "蜘蛛壓克力串串",
              "size": "6 cm",
              "spec": "",
              "price": "$150"
            },
            {
              "name": "蜘蛛壓克力吊飾",
              "size": "6 cm",
              "spec": "款式：衰臉雞母蟲、珍蛛奶茶、串串復刻、藍寶石華麗雨林、墨西哥紅膝頭",
              "price": "$120"
            },
            {
              "name": "蜘蛛迷因貼紙",
              "size": "",
              "spec": "",
              "price": ""
            }
          ]
        },
        {
          "category": "活體（未標價）",
          "items": [
            {
              "name": "蜘蛛寶寶 墨西哥火腳 (?)"
            },
            {
              "name": "蜘蛛寶寶 巴西巨人金直間 (?)"
            },
            {
              "name": "蜘蛛寶寶 尼加拉瓜卷毛"
            },
            {
              "name": "印度華麗雨林 大幼",
              "size": "",
              "spec": "需詢問"
            },
            {
              "name": "馬島蟑螂寶寶"
            },
            {
              "name": "S 杜比亞"
            },
            {
              "name": "SS 紅蟑 (?)"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 9,
    "name": "君の365日",
    "cat": "other",
    "items": [
      "手作鉤針小物（青蛙/守宮娃等 amigurumi）",
      "銀飾金工小品",
      "生日禮物訂製"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/kimi.365days/"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "手作鉤針蛙娃/守宮娃（amigurumi，非活體）",
      "鬆獅蜥/小丑蛙等手作娃",
      "銀飾金工小品"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 10,
    "name": "兜長的鍬大",
    "cat": "beetle",
    "items": [
      "阿根廷小兜等甲蟲（甲蟲專賣，板橋店）",
      "甲蟲溫控出租、飼育用品、昆蟲標本"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/fantastic__beetles/"
      },
      {
        "label": "官網",
        "url": "https://www.fantastic-beetles.com/"
      }
    ],
    "verified": true,
    "note": "台北甲蟲專賣店",
    "species": [
      {
        "name": "英特梅迪亞鬼豔鍬形蟲",
        "sci": "Odontolabis dalmanni intermedia",
        "size": "雄蟲45-107mm"
      },
      {
        "name": "婆羅洲南洋大兜蟲",
        "sci": "Chalcosoma moellenkampi",
        "size": "45-110mm"
      },
      {
        "name": "高卡薩斯南洋大兜蟲",
        "sci": "Chalcosoma chiron chiron",
        "size": "116mm"
      },
      {
        "name": "戰神大兜蟲",
        "sci": "Megasoma mars",
        "size": "圖中121mm/119mm"
      },
      {
        "name": "阿根廷小兜"
      },
      {
        "name": "海神大兜蟲"
      },
      {
        "name": "馬場黃金鬼鍬形蟲",
        "note": "長牙個體"
      }
    ],
    "otherItems": [
      "溫控出租（板橋店/新生北路/淡水24hr溫控）"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 11,
    "name": "彼特巴克斯",
    "cat": "other",
    "items": [
      "日本甲蟲飼育用品（經銷）",
      "甲蟲相關產品開發販售"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/beetlebox.taiwan"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "KB專業果凍（新增銷售產品，甲蟲飼育果凍）",
      "日本甲蟲飼育用品（SEALACASE 經銷）"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 12,
    "name": "反正閒著也是閒著",
    "cat": "beetle",
    "items": [
      "大型甲蟲（成蟲/飼育個體）",
      "標本代工製作"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/people/%E5%8F%8D%E6%AD%A3%E9%96%92%E8%91%97%E4%B9%9F%E6%98%AF%E9%96%92%E8%91%97/100066517311563/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/beetle0321/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle0321/p/Ctcz_WWyG1v/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle0321/p/Dbw3FBulDt7/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle0321/p/DXOy3k6lCrT/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "霸王鬼",
        "stage": "成蟲",
        "size": "105+mm",
        "note": "已羽化 105+"
      },
      {
        "name": "保齡原名",
        "stage": "成蟲",
        "size": "84+mm",
        "note": "84+"
      },
      {
        "name": "山神",
        "stage": "成蟲",
        "note": "系列個體"
      },
      {
        "name": "安哥拉霸王無翅糞金龜",
        "stage": "成蟲",
        "size": "52+mm"
      },
      {
        "name": "大力水手糞金龜",
        "stage": "成蟲"
      },
      {
        "name": "阿多糞金龜",
        "stage": "成蟲"
      },
      {
        "name": "西藏墨脫產康塔",
        "stage": "成蟲"
      }
    ],
    "otherItems": [
      "標本代工製作（簡介）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/beetle0321/p/Ctcz_WWyG1v/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 13,
    "name": "友蟲出沒",
    "cat": "beetle",
    "items": [
      "蘇門亞齊巨扁、帝王扁等甲蟲（飼育個體）",
      "蝦皮/露天 店舖商品（ruten weioak0602）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "露天賣場",
        "url": "https://www.ruten.com.tw/store/weioak0602/list"
      },
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/100083281663636"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/profile.php?id=100083281663636"
      }
    ],
    "verified": true,
    "note": "露天賣場名為「AfteR 巨扁專門」",
    "species": [
      {
        "name": "亞齊巨扁",
        "sci": "Dorcus titanus yasuokai",
        "stage": "成蟲/飼育個體"
      },
      {
        "name": "帝王扁",
        "sci": "Dorcus titanus imperialis",
        "stage": "成蟲/飼育個體"
      }
    ],
    "otherItems": [
      "蝦皮/露天/Ruten 商店商品（ruten weioak0602）"
    ],
    "listFound": false,
    "source": "https://www.facebook.com/profile.php?id=100083281663636",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 14,
    "name": "呱鼠婦",
    "cat": "other",
    "items": [
      "鼠婦（活體/飼育）",
      "肥尾守宮",
      "展場周邊/活體消費折抵"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/gua_isopods/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/gua_isopods/p/DToYRcLEhkq/"
      }
    ],
    "verified": true,
    "note": "IG 上的抽獎貼文屬於「國際兩棲爬蟲盛典」，非本次活動。",
    "species": [
      {
        "name": "雪墨",
        "note": "鼠婦，全台首發"
      },
      {
        "name": "古巴剌",
        "note": "鼠婦"
      },
      {
        "name": "橘熊貓",
        "note": "鼠婦"
      },
      {
        "name": "檸檬藍",
        "note": "鼠婦"
      }
    ],
    "otherItems": [
      "鼠婦周邊/活體消費折抵卷（刮刮樂獎品）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/gua_isopods/p/DToYRcLEhkq/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 15,
    "name": "喜蟲天降",
    "cat": "beetle",
    "items": [
      "蠶寶寶（昆蟲同樂會現場）",
      "甲蟲（甲蟲專賣，庫存與新莊門市同步）",
      "昆蟲果凍/甲蟲食材"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/beetles242"
      },
      {
        "label": "官網",
        "url": "https://www.beetles.com.tw/"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/beetles242/posts/pfbid02JgnoMrHFiDPm7C7oyiu3tp7N5rZKaDJLVCGvQaDqBN5YViXKTeEBKeZmijBix1Uql"
      }
    ],
    "verified": true,
    "note": "新北新莊、三重實體店",
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "蠶寶寶（昆蟲同樂會現場）",
      "甲蟲（甲蟲專賣，未列品種）",
      "昆蟲果凍/甲蟲食材"
    ],
    "listFound": false,
    "source": "https://www.facebook.com/beetles242/posts/pfbid02JgnoMrHFiDPm7C7oyiu3tp7N5rZKaDJLVCGvQaDqBN5YViXKTeEBKeZmijBix1Uql",
    "detail": {
      "source": "https://www.facebook.com/beetles242",
      "sourceLabel": "FB 喜蟲天降 活動 reel",
      "info": [
        "caption：「10/17～18 松菸 有蠶寶寶」"
      ],
      "groups": [
        {
          "category": "活體",
          "items": [
            {
              "name": "蠶寶寶",
              "size": "",
              "spec": "",
              "price": "未標價"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 16,
    "name": "鐵甲之森",
    "cat": "beetle",
    "items": [
      "活體甲蟲成蟲、幼蟲（工作室甲蟲）",
      "飼育用品（飼育耗材/容器）"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=61581068873848"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/ironbeetle_forest/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/ironbeetle_forest/p/Dd-t6rSTjnX/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/ironbeetle_forest/p/DXvaNhvE2zS/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "活體成蟲、幼蟲（caption說明，未列品種）",
      "飼育用品/耗材（未列品項）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/ironbeetle_forest/p/Dd-t6rSTjnX/",
    "detail": {
      "source": "https://www.instagram.com/ironbeetle_forest/p/Dd-t6rSTjnX/",
      "sourceLabel": "IG @ironbeetle_forest 活動海報（1張）",
      "info": [
        "海報僅寫：工作室甲蟲 活體成蟲、幼蟲、飼育用品；未列物種名"
      ]
    }
  },
  {
    "no": 17,
    "name": "微笑鼠餅",
    "cat": "other",
    "items": [
      "鼠婦（自家繁殖/少見品系）",
      "蜘蛛",
      "蠍子",
      "蟑螂"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/smile.isopoto/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/smile.isopoto/p/Dd8B0ngCWhe/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/smile.isopoto/reel/DeEGMZrpGlp/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "鼠婦（自家繁殖/少見品系，未列品種）",
      "蜘蛛",
      "蠍子",
      "蟑螂"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/smile.isopoto/p/Dd8B0ngCWhe/",
    "detail": {
      "source": "https://www.instagram.com/smile.isopoto/p/Dd8B0ngCWhe/",
      "sourceLabel": "IG @smile.isopoto 活動海報",
      "info": [
        "已確認參展，貼文未列品項"
      ]
    }
  },
  {
    "no": 18,
    "name": "Tentez Bijouterie 銅蝶古飾",
    "cat": "other",
    "items": [
      "昆蟲主題飾品（銀杏耳環/項鍊等蟲蟲飾品）",
      "昆蟲系列新品"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Pinkoi",
        "url": "https://www.pinkoi.com/store/tentezbijoiterie"
      },
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/tentezbijoiterie/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/rita_h926/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/rita_h926/p/DegEtc4IAv8/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "昆蟲主題飾品（銀杏耳環NT780、銀杏項鍊NT880 等，昆蟲同樂會新品）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/rita_h926/p/DegEtc4IAv8/",
    "detail": {
      "source": "https://www.instagram.com/rita_h926/p/DegEtc4IAv8/",
      "sourceLabel": "IG @rita_h926 活動貼文（4張）",
      "info": [
        "飾品攤，非活體昆蟲"
      ],
      "groups": [
        {
          "category": "飾品",
          "items": [
            {
              "name": "銀杏耳環",
              "size": "",
              "spec": "",
              "price": "NT$780"
            },
            {
              "name": "銀杏項鍊",
              "size": "",
              "spec": "",
              "price": "NT$880"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 19,
    "name": "SPB STUDIO",
    "cat": "other",
    "items": [
      "甲蟲仿真模型（自製甲蟲模型/製作）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/p/SPB-Studio-61576932157332/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/beetle69.69/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle69.69/p/DVY0k_lj_j3/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle69.69/p/DRKOMqaD4N4/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "CCJ 甲蟲仿真模型",
        "size": "138-140mm",
        "price": "NT$1,500",
        "note": "140mm/138mm，南洋大兜系列"
      },
      {
        "name": "RWW 動態版 甲蟲仿真模型",
        "price": "NT$1,200（附支架）",
        "note": "金剛大鹿角系列"
      },
      {
        "name": "RWW 甲蟲仿真模型",
        "size": "106mm",
        "price": "NT$1,000（附支架）"
      },
      {
        "name": "LCJ 甲蟲仿真模型",
        "size": "108mm",
        "price": "NT$1,000（附支架）"
      },
      {
        "name": "OB 甲蟲仿真模型",
        "size": "116mm",
        "price": "NT$1,000（附支架）"
      },
      {
        "name": "HRC 甲蟲仿真模型",
        "size": "110mm",
        "price": "NT$700（附支架）"
      },
      {
        "name": "HMS 紅色型 甲蟲仿真模型",
        "size": "120mm",
        "price": "NT$800（附支架）"
      },
      {
        "name": "HMS 甲蟲仿真模型",
        "size": "120mm",
        "price": "NT$700（附支架）"
      }
    ],
    "otherItems": [
      "甲蟲仿真模型（不可動/動態版，非活體）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/beetle69.69/p/DVY0k_lj_j3/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 20,
    "name": "穿越石光-化石礦物小舖",
    "cat": "other",
    "items": [
      "天然化石（菊石、箭石、三葉蟲、海百合等）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/p/%E7%A9%BF%E8%B6%8A%E7%9F%B3%E5%85%89-Alexs-Fossil-61581454408985/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/alex.fossils/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/alex.fossils/p/DXVU3TJE_wt/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/alex.fossils/p/DZB3K3jk1gw/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "棘菊石",
        "sci": "Echioceras sp.",
        "stage": "化石"
      },
      {
        "name": "麗菊石",
        "sci": "Caloceras johnstoni",
        "stage": "化石"
      },
      {
        "name": "交葉菊石",
        "sci": "Crucilobiceras sp.",
        "stage": "化石"
      },
      {
        "name": "齒菊石",
        "sci": "Ceratites pranodosus",
        "stage": "化石"
      },
      {
        "name": "亞米克菊石",
        "sci": "Submeekoceras mushbachanum",
        "stage": "化石"
      },
      {
        "name": "劍菊石",
        "sci": "Xipheroceras sp.",
        "stage": "化石"
      },
      {
        "name": "指菊石",
        "sci": "Dactylioceras",
        "stage": "化石（群版）",
        "note": "英國約克郡"
      },
      {
        "name": "巨頷虎",
        "sci": "Megantereon sp.",
        "stage": "化石",
        "note": "劍齒虎化石頭骨"
      }
    ],
    "otherItems": [
      "菊石圖鑑海報（馬島白堊紀菊石海報，熱烈販售中，A2）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/alex.fossils/p/DXVU3TJE_wt/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 21,
    "name": "TNF 財團法人自然保育與環境資訊基金會",
    "cat": "other",
    "items": [
      "環境教育/生態導覽活動宣傳（非商品攤）",
      "生態工作假期、珊瑚礁體檢等推廣"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/TNF.npo/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/tnf_npo/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/tnf_npo/p/Dd-5fSEjagg/"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "環境教育/生態導覽活動宣傳（非商品攤）",
      "生態工作假期、珊瑚礁體檢等推廣"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/tnf_npo/p/Dd-5fSEjagg/",
    "detail": {
      "source": "https://www.instagram.com/tnf_npo/p/Dd-5fSEjagg/",
      "sourceLabel": "IG @tnf_npo 活動彙整",
      "info": [
        "已確認參展，貼文未列品項"
      ]
    }
  },
  {
    "no": 22,
    "name": "A Bit Butter",
    "cat": "other",
    "items": [
      "永生花/乾燥花造景",
      "蝴蝶與昆蟲標本搭配作品（蝴蝶、蛾類標本）",
      "客製玻璃罩/畫框"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/people/A-Bit-Butter/100064310883936/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/abitbutter/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/abitbutter/p/DQdqq5Zksfz/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/abitbutter/p/DXJafkYEkGp/"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "蝴蝶與蛾類標本（客製玻璃罩/畫框作品用，非活體）",
      "永生花/乾燥花造景",
      "客製玻璃罩/畫框/擴香/卡片"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/abitbutter/p/DQdqq5Zksfz/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 23,
    "name": "寮國標本工作室",
    "cat": "other",
    "items": [
      "寮國產昆蟲標本（死體，蝦皮商品頁）"
    ],
    "lottery": null,
    "links": [],
    "verified": true,
    "species": [
      {
        "name": "寮國產 鍬形蟲標本",
        "sci": "Lucanus angusticornis",
        "stage": "標本（死體）",
        "note": "死體"
      },
      {
        "name": "寮國產 金龜標本",
        "sci": "Catoxantha bonvouloirii",
        "stage": "標本（死體）",
        "note": "死體"
      }
    ],
    "otherItems": [
      "昆蟲標本（死的非活體，寮國產）"
    ],
    "listFound": false
  },
  {
    "no": 24,
    "name": "甲蟲一號",
    "cat": "beetle",
    "items": [
      "甲蟲（台灣深山鍬形蟲、南洋大兜等，有販售清單）",
      "無限木屑/進化木屑"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/TheBeetleOne/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/beetle_1one/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle_1one/p/DSohhWnkhaP/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle_1one/p/DUqap4TEgFR/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "秘魯長鬚鍬",
        "sci": "Cantharolethrus peruvianus",
        "stage": "成蟲",
        "note": "Cantharolethrus peruvianus / C. steinheili 另亞種"
      },
      {
        "name": "南洋大兜蟲 CCK",
        "sci": "Chalcosoma chiron kirbyi",
        "stage": "成蟲（客戶成績回報）",
        "note": "馬來半島，長牙個體"
      },
      {
        "name": "台灣深山鍬形蟲",
        "sci": "Lucanus formosanus",
        "stage": "成蟲（羽化）",
        "size": "羽化83mm（客戶回報）"
      },
      {
        "name": "路尼佛深山",
        "sci": "Lucanus lunifer lunifer",
        "stage": "成蟲（客戶回報）",
        "size": "80mm+（客戶回報）",
        "note": "原名亞種"
      }
    ],
    "otherItems": [
      "甲蟲一號進化木屑 SHINKA MAT / 無限木屑 MUGEN MAT（自家耗材）",
      "百元扭蛋機/十秒挑戰（過往展場，非本次）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/beetle_1one/p/DSohhWnkhaP/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 25,
    "name": "餘光 Splendor",
    "cat": "other",
    "items": [
      "玻璃罩微景觀標本作品（小蝴蝶、小甲蟲）",
      "寵物剝製標本（客訂）",
      "昆蟲/藍閃蝶課程"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Threads",
        "url": "https://www.threads.com/@splendor0"
      },
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/61554864673702/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/splendor0/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/splendor0/p/DeeKq0elDCv/"
      }
    ],
    "verified": true,
    "note": "曾參加 2026 年 2 月台灣國際昆蟲博覽會",
    "species": [],
    "otherItems": [
      "玻璃罩微景觀標本作品（小蝴蝶、小甲蟲）",
      "寵物剝製標本（客訂）",
      "昆蟲生態造景/標本製作課程",
      "藍閃蝶課程"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/splendor0/p/DeeKq0elDCv/",
    "detail": {
      "source": "https://www.instagram.com/splendor0/p/DeeKq0elDCv/",
      "sourceLabel": "IG @splendor0 展覽資訊（2張）",
      "info": [
        "貼文無品項清單；提供 8 張入場證（留言/私訊領取，非抽獎）",
        "⚠ 貼文寫「位置：52號 多功能展廳A7W」，但官方對照表 52 號為「星光」、本站依官方表列在 25 號，請以現場為準"
      ]
    }
  },
  {
    "no": 26,
    "name": "觀蟲 Beetle Discovery",
    "cat": "beetle",
    "items": [
      "成蟲甲蟲（極太中國大鍬、極太深山扁、安達、台灣深山扁等鍬形蟲）",
      "觀蟲倉庫線上上架"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=100090659571692"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/beetle_discovery/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle_discovery/p/DUxq_5rD6nO/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/beetle_discovery/p/DUspDHelISl/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "中國大鍬",
        "sci": "Dorcus hopei hopei",
        "stage": "成蟲（管理編號個體）",
        "size": "體長65.8-77mm（多個編號貼文）",
        "note": "極太北峰"
      },
      {
        "name": "深山扁",
        "sci": "Dorcus kyanrauensis",
        "stage": "成蟲（2026/01 羽化紀錄）",
        "note": "極太"
      },
      {
        "name": "長戟大兜",
        "sci": "Dynastes hercules",
        "stage": "成蟲",
        "note": "原名亞種，管理編號25C157"
      }
    ],
    "otherItems": [
      "觀蟲倉庫線上上架（個體管理編號販售）",
      "抽獎活動舊貼文（非本次）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/beetle_discovery/p/DUxq_5rD6nO/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 27,
    "name": "肚肚鳥 Tummy Bird",
    "cat": "other",
    "items": [
      "昆蟲寶石飾品（真實昆蟲製作的耳環/項鍊等）"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/tummy_bird/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/tummy_bird/p/Da7fm9yjCtW/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "昆蟲寶石飾品（真實昆蟲製作的耳環/項鍊等，未列品種）",
      "昆蟲學名種子標籤紙（隨飾品附贈）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/tummy_bird/p/Da7fm9yjCtW/",
    "detail": {
      "source": "https://www.instagram.com/tummy_bird/p/Da7fm9yjCtW/",
      "sourceLabel": "IG @tummy_bird 行程",
      "info": [
        "已確認參展，貼文未列品項"
      ]
    }
  },
  {
    "no": 28,
    "name": "CSU 晶礦拾光",
    "cat": "other",
    "items": [
      "原礦（敲水晶體驗，開出礦石/天然礦石）",
      "水晶/種子 相關礦石小物"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/csu_1122/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/csu_1122/p/DeYxEwIyyFb/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/csu_1122/p/DeRz6wnSiR_/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "原礦（敲水晶體驗，開出礦石/天然礦石）",
      "水晶/種子 相關礦石小物"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/csu_1122/p/DeYxEwIyyFb/",
    "detail": {
      "source": "https://www.instagram.com/csu_1122/p/DeYxEwIyyFb/",
      "sourceLabel": "IG @csu_1122 活動貼文",
      "info": [
        "已確認參展，貼文未列品項"
      ]
    }
  },
  {
    "no": 29,
    "name": "蟲植寓所",
    "cat": "beetle",
    "items": [
      "陳氏深山鍬形蟲 Lucanus cheni 幼蟲（墨脫汗密產 WF2，1-2齡，約500隻）",
      "大牙叉種公後代幼蟲",
      "黑牛木屑/飼育耗材"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/IPA168"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/IPA168/posts/pfbid03yRXbRgUs55bWiK5wr2Rw7gxhvVPbugFDLoAZDUvgJjwKRX2k37ErxoPaEVceD9Vl"
      }
    ],
    "verified": true,
    "note": "桃園中壢蟲店",
    "fromEventPost": true,
    "species": [
      {
        "name": "陳氏深山 墨脫汗密產 幼蟲",
        "sci": "Lucanus cheni",
        "stage": "幼蟲 1-2齡",
        "note": "WF2，1-2齡"
      },
      {
        "name": "大牙叉種公後代幼蟲",
        "stage": "幼蟲"
      }
    ],
    "otherItems": [
      "黑牛木屑/飼育耗材"
    ],
    "listFound": true,
    "source": "https://www.facebook.com/IPA168/posts/pfbid03yRXbRgUs55bWiK5wr2Rw7gxhvVPbugFDLoAZDUvgJjwKRX2k37ErxoPaEVceD9Vl",
    "detail": {
      "source": "https://www.facebook.com/IPA168/posts/pfbid0qZHqup4RmA1321C1sAWsguawYtBMQuKe7W56KrsSGF5T9y67NMCkizHWNr5c7ADEl",
      "sourceLabel": "FB 蟲植寓所 活動貼文（含標本圖）",
      "info": [
        "配合主辦單位調整至 29 號"
      ],
      "groups": [
        {
          "category": "販售：幼蟲",
          "items": [
            {
              "name": "陳氏深山 Lucanus cheni（中國西藏墨脫汗密產）",
              "size": "",
              "spec": "WF2 1–2齡，500cc 黑牛木屑盒",
              "price": "未標價",
              "qty": "每條血統約 100 隻，共約 500 隻"
            }
          ]
        },
        {
          "category": "展示：種公標本（非販售）",
          "items": [
            {
              "name": "A 野生 ♂",
              "size": "74mm"
            },
            {
              "name": "A1 ♂",
              "size": "79mm"
            },
            {
              "name": "A2 ♂",
              "size": "79mm"
            },
            {
              "name": "A3 ♂",
              "size": "83mm"
            },
            {
              "name": "A4 ♂",
              "size": "82mm"
            },
            {
              "name": "A5 ♂",
              "size": "75mm"
            },
            {
              "name": "A6 ♂",
              "size": "76mm"
            },
            {
              "name": "A7 ♂",
              "size": "77mm"
            },
            {
              "name": "B 野生 ♂",
              "size": "73mm"
            },
            {
              "name": "B1 ♂",
              "size": "81mm"
            },
            {
              "name": "B3 ♂",
              "size": "79mm"
            },
            {
              "name": "B4 ♂",
              "size": "77mm"
            },
            {
              "name": "B5 ♂",
              "size": "77mm"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 30,
    "name": "鍬集野人",
    "cat": "beetle",
    "items": [
      "精選活體鍬形蟲（台灣深山鍬形蟲等）",
      "鍬集木屑（10L/包）",
      "各式乾貨/蟲竿等飼育品"
    ],
    "lottery": false,
    "links": [
      {
        "label": "賣場",
        "url": "https://huei-shop.com/archives/vendor/e9"
      },
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/p/%E9%8D%AC%E9%9B%86%E9%87%8E%E4%BA%BA-100054305899734/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/lucanus11/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/lucanus11/p/DegdV-6zbmF/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "精選活體鍬形蟲（未列品種，caption: 台灣深山鍬形蟲等）",
      "鍬集木屑（一箱 NT$1,900含運，購買即贈頂級好血台深幼蟲5隻一組）",
      "各式乾貨/飼育品（乾貨滿$500贈$100）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/lucanus11/p/DegdV-6zbmF/",
    "detail": {
      "source": "https://www.instagram.com/lucanus11/p/DegdV-6zbmF/",
      "sourceLabel": "IG @lucanus11 活動貼文（1張）",
      "info": [
        "精選活體、各式乾貨（未列物種名）"
      ],
      "promos": [
        "鍬集木屑 NT$1,900/箱（含運），送頂級好血台深幼蟲 5 隻",
        "乾貨滿 $500 回饋 $100"
      ]
    }
  },
  {
    "no": 31,
    "name": "酷嗜自然 Kus Nature",
    "cat": "other",
    "items": [
      "待確認"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/kuusnature/"
      }
    ],
    "verified": false,
    "species": [],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 32,
    "name": "好野人甲蟲專門",
    "cat": "beetle",
    "items": [
      "幼蟲（扭蛋獎品，160組幼蟲，分4輪）",
      "甲蟲飼育耗材（野育系列木屑等）"
    ],
    "lottery": true,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/people/%E5%A5%BD%E9%87%8E%E4%BA%BA-%E7%94%B2%E8%9F%B2%E5%B0%88%E9%96%80-WildMan-Beetles-Studio/100064327556596/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/wildman_beetlesstudio/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "lotteryNote": "幼蟲扭蛋（10/17–18 松菸 32 號）：單抽 $250，五抽以上 $200/抽，10 抽再送 1 抽；160 組幼蟲分 4 輪，兩台扭蛋機共用獎池（每台 20 顆/輪），每輪 1 組 EX 賞。獎項：EX 4 組、A 35 組、B 38 組、C 65 組、D 18 組。",
    "source": "https://www.instagram.com/wildman_beetlesstudio/p/DehLAeemXX1/",
    "species": [
      {
        "name": "蒙奇龍細身 Mapia CB",
        "stage": "幼蟲；1隻/組，4組",
        "note": "EX賞"
      },
      {
        "name": "印度大叉角 CBF3",
        "stage": "幼蟲；1隻/組，7組",
        "note": "A賞"
      },
      {
        "name": "保齡氏叉角 APLS CBF1",
        "stage": "幼蟲；1隻/組，8組",
        "note": "A賞"
      },
      {
        "name": "帝王細身 WF4",
        "stage": "幼蟲；2隻/組，5組",
        "note": "A賞"
      },
      {
        "name": "周氏細身 75mm血同腹 CBF2",
        "stage": "幼蟲；1隻/組，8組",
        "note": "A賞"
      },
      {
        "name": "塔蘭度斯細身 WF1",
        "stage": "幼蟲；2隻/組，2組",
        "note": "A賞"
      },
      {
        "name": "佩洛蒂偽鹿角 WF1",
        "stage": "幼蟲；1隻/組，5組",
        "note": "A賞"
      },
      {
        "name": "紅蓮叉角 CBF1",
        "stage": "幼蟲；1隻/組，8組",
        "note": "B賞"
      },
      {
        "name": "緬甸大叉角 CBF1",
        "stage": "幼蟲；1隻/組，6組",
        "note": "B賞"
      },
      {
        "name": "考皮細身 CBF1",
        "stage": "幼蟲；3隻/組，5組",
        "note": "B賞"
      },
      {
        "name": "廩麻鬼艷 C亞種 WF1",
        "stage": "幼蟲；2隻/組，5組",
        "note": "B賞"
      },
      {
        "name": "長載大兜 Bull血統",
        "stage": "幼蟲；1隻/組，8組",
        "note": "角幅17.8後代；B賞"
      },
      {
        "name": "瑪格麗特小兜 CBF1",
        "stage": "幼蟲；2隻/組，3組",
        "note": "B賞"
      },
      {
        "name": "LV小兜 CBF2",
        "stage": "幼蟲；2隻/組，3組",
        "note": "B賞"
      },
      {
        "name": "明寧瑞奇叉角 CBF2",
        "stage": "幼蟲；2隻/組，5組",
        "note": "C賞"
      },
      {
        "name": "犀牛叉角 C亞種 WF1",
        "stage": "幼蟲；1隻/組，8組",
        "note": "C賞"
      },
      {
        "name": "小帝王細身 CBF2",
        "stage": "幼蟲；2隻/組，2組",
        "note": "C賞"
      },
      {
        "name": "長頸鹿細身 CBF2",
        "stage": "幼蟲；3隻/組，3組",
        "note": "C賞"
      },
      {
        "name": "M島大頭細身 CBF3",
        "stage": "幼蟲；2隻/組，3組",
        "note": "C賞"
      },
      {
        "name": "Dorcus axisopsis WF2",
        "stage": "幼蟲；1隻/組，8組",
        "note": "C賞"
      },
      {
        "name": "斑馬鉅 爪哇 WF1",
        "stage": "幼蟲；2隻/組，5組",
        "note": "C賞"
      },
      {
        "name": "拉法鐵鉅 CBF2",
        "stage": "幼蟲；3隻/組，6組",
        "note": "C賞"
      },
      {
        "name": "蘇門寬扁 WF1",
        "stage": "幼蟲；2隻/組，3組",
        "note": "C賞"
      },
      {
        "name": "黃金鹿角 CBF2",
        "stage": "幼蟲；2隻/組，4組",
        "note": "C賞"
      },
      {
        "name": "羅馬戰士 WF4",
        "stage": "幼蟲；3隻/組，5組",
        "note": "C賞"
      },
      {
        "name": "海神大兜 131×68 CBF1",
        "stage": "幼蟲；1隻/組，5組",
        "note": "C賞"
      },
      {
        "name": "美他力佛細身 湖水綠 CBF2",
        "stage": "幼蟲；3隻/組，4組",
        "note": "D賞"
      },
      {
        "name": "彩虹鍬型蟲 鏡面藍紫",
        "stage": "幼蟲；3隻/組，3組",
        "note": "D賞"
      },
      {
        "name": "彩虹鍬型蟲 紅皮卡",
        "stage": "幼蟲；3隻/組，3組",
        "note": "D賞"
      },
      {
        "name": "彩虹鍬型蟲 特選綠皮卡",
        "stage": "幼蟲；3隻/組，3組",
        "note": "D賞"
      },
      {
        "name": "亞克提恩大兜",
        "stage": "幼蟲；3隻/組，5組",
        "note": "D賞"
      }
    ],
    "otherItems": [
      "甲蟲飼育耗材（野育系列木屑等）"
    ],
    "listFound": true,
    "note": "C 賞標題寫 65 組，但圖中列出 12 項合計僅 57 組，可能有漏列或讀圖誤差；品種名依圖片小字抄錄，請以現場為準。",
    "detail": {
      "source": "https://www.instagram.com/wildman_beetlesstudio/p/DehLAeemXX1/",
      "sourceLabel": "IG @wildman_beetlesstudio 甲蟲幼蟲扭蛋全獎項清單",
      "info": [
        "甲蟲幼蟲扭蛋 160 組，每抽都有獎（品系／血統・每組隻數・組數）",
        "成蟲照片僅供參考，以上獎品皆為幼蟲；75mm 為血統來源尺寸"
      ],
      "promos": [
        "單抽 $250；5 抽起 $200/抽；10 抽送 1（依瀏覽器讀取 caption）"
      ],
      "tiers": [
        {
          "title": "EX賞｜4組",
          "cols": [
            "物種／品系",
            "每組",
            "組數"
          ],
          "items": [
            {
              "name": "蒙奇龍細身 Mapia CB",
              "qty": "1隻/組",
              "spec": "4組"
            }
          ]
        },
        {
          "title": "A賞｜35組",
          "cols": [
            "物種／品系",
            "每組",
            "組數"
          ],
          "items": [
            {
              "name": "印度大叉角 CBF3",
              "qty": "1隻/組",
              "spec": "7組"
            },
            {
              "name": "保齡氏叉角 APLS CBF1",
              "qty": "1隻/組",
              "spec": "8組"
            },
            {
              "name": "帝王細身 WF4",
              "qty": "2隻/組",
              "spec": "5組"
            },
            {
              "name": "周氏細身 75mm血同腹 CBF2",
              "qty": "1隻/組",
              "spec": "8組"
            },
            {
              "name": "塔蘭度斯細身 WF1",
              "qty": "2隻/組",
              "spec": "2組"
            },
            {
              "name": "佩洛蒂偽鹿角 WF1",
              "qty": "1隻/組",
              "spec": "5組"
            }
          ]
        },
        {
          "title": "B賞｜38組",
          "cols": [
            "物種／品系",
            "每組",
            "組數"
          ],
          "items": [
            {
              "name": "紅蓮叉角 CBF1",
              "qty": "1隻/組",
              "spec": "8組"
            },
            {
              "name": "緬甸大叉角 CBF1",
              "qty": "1隻/組",
              "spec": "6組"
            },
            {
              "name": "考皮細身 CBF1",
              "qty": "3隻/組",
              "spec": "5組"
            },
            {
              "name": "廩麻鬼艷 C亞種 WF1 (?)",
              "qty": "2隻/組",
              "spec": "5組"
            },
            {
              "name": "長頸鹿大兜 Bull血統 角根17.8mm代",
              "qty": "1隻/組",
              "spec": "8組"
            },
            {
              "name": "瑪格麗特小兜 CBF1",
              "qty": "2隻/組",
              "spec": "3組"
            },
            {
              "name": "LV小兜 CBF2",
              "qty": "2隻/組",
              "spec": "3組"
            }
          ]
        },
        {
          "title": "C賞｜65組",
          "cols": [
            "物種／品系",
            "每組",
            "組數"
          ],
          "items": [
            {
              "name": "明寧瑞奇叉角 CBF2",
              "qty": "2隻/組",
              "spec": "5組"
            },
            {
              "name": "犀牛叉角 C亞種 WF1",
              "qty": "1隻/組",
              "spec": "8組"
            },
            {
              "name": "小帝王細身 CBF2",
              "qty": "2隻/組",
              "spec": "2組"
            },
            {
              "name": "長頸鹿細身 CBF2",
              "qty": "3隻/組",
              "spec": "3組"
            },
            {
              "name": "M島大頭細身 CBF3",
              "qty": "2隻/組",
              "spec": "3組"
            },
            {
              "name": "Dorcus axisopsis WF2",
              "qty": "1隻/組",
              "spec": "8組"
            },
            {
              "name": "斑馬鬼 爪哇 WF1",
              "qty": "2隻/組",
              "spec": "5組"
            },
            {
              "name": "拉法鐵鍬 CBF2",
              "qty": "3隻/組",
              "spec": "6組"
            },
            {
              "name": "蘇門蓋鍬 WF1 (?)",
              "qty": "2隻/組",
              "spec": "3組"
            },
            {
              "name": "黃金鬼 CBF2 (?)",
              "qty": "2隻/組",
              "spec": "4組"
            },
            {
              "name": "羅馬戰士 WF4 (?)",
              "qty": "3隻/組",
              "spec": "5組"
            },
            {
              "name": "海神大兜 131×68 CBF1",
              "qty": "1隻/組",
              "spec": "5組"
            }
          ]
        },
        {
          "title": "D賞｜18組",
          "cols": [
            "物種／品系",
            "每組",
            "組數"
          ],
          "items": [
            {
              "name": "美他力佛細身 CBF2",
              "qty": "3隻/組",
              "spec": "4組"
            },
            {
              "name": "彩虹鍬型蟲 鏡面藍紫",
              "qty": "3隻/組",
              "spec": "3組"
            },
            {
              "name": "彩虹鍬型蟲 紅皮卡",
              "qty": "3隻/組",
              "spec": "3組"
            },
            {
              "name": "彩虹鍬型蟲 特選綠皮卡",
              "qty": "3隻/組",
              "spec": "3組"
            },
            {
              "name": "亞克提恩大兜 (?)",
              "qty": "3隻/組",
              "spec": "5組"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 33,
    "name": "森嶼甲蟲-昆蟲生態館",
    "cat": "beetle",
    "items": [
      "各式活體成蟲、幼蟲（甲蟲）",
      "昆蟲飼育用品・耗材"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/senyu_beetles/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/senyu_beetles/p/DeOkhZRz_wU/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/senyu_beetles/p/DclF_1sT2Bf/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "note": "本次活動展場限定全商品 8 折；另有全店「雙10活動」（10/8–10/31，滿 300 送摸彩券，11/1 開獎），不確定是否適用攤位。",
    "species": [],
    "otherItems": [
      "各式活體成蟲、幼蟲（甲蟲，未列品種）",
      "昆蟲飼育用品・耗材"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/senyu_beetles/p/DeOkhZRz_wU/",
    "detail": {
      "source": "https://www.instagram.com/senyu_beetles/p/DeOkhZRz_wU/",
      "sourceLabel": "IG @senyu_beetles 貼文",
      "info": [
        "抽獎：頭獎 極大血統亞齊巨鍬 (?)；四等獎 隨機成蟲 (?)"
      ],
      "promos": [
        "門市全店優惠 10/8–10/31（非活動專屬，現場是否適用未確認）：活體 8 折、耗材 9 折"
      ]
    }
  },
  {
    "no": 34,
    "name": "蟲丸の飼",
    "cat": "other",
    "items": [
      "蟲丸木屑（高添加/低添加）",
      "南洋發酵木屑",
      "丸熟大兜土（飼育耗材）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/Luke.fishingcalstar/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "M島大頭細身",
        "stage": "幼蟲（投產中）",
        "note": "投產，幼蟲約39隻"
      },
      {
        "name": "大王花金龜",
        "stage": "幼蟲",
        "note": "幼蟲"
      }
    ],
    "otherItems": [
      "蟲丸木屑（高添加/低添加）",
      "南洋發酵木屑",
      "丸熟大兜土（飼育耗材）"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 35,
    "name": "日月蟲光",
    "cat": [
      "beetle",
      "reptile"
    ],
    "items": [
      "甲蟲（法西努斯三角龍兜、金剛大鹿角等）",
      "爬蟲/鼠婦（台灣爬蟲祭展品）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/p/%E6%97%A5%E6%9C%88%E8%9F%B2%E5%85%89-100095562392614/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/sunmoonbeetle/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/sunmoonbeetle/p/DdJxQY5FMwf/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/sunmoonbeetle/p/DUgX6h2kujK/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "法西努斯三角龍兜",
        "sci": "Strategus fascinus"
      },
      {
        "name": "愛情海豎角兜",
        "sci": "Golofa aegeon",
        "note": "秘魯產"
      },
      {
        "name": "智利長牙鍬形蟲",
        "sci": "Chiasognathus grantii"
      },
      {
        "name": "烏魯斯小兜",
        "sci": "Agaocephala urus",
        "stage": "成蟲（公蟲羽化）"
      },
      {
        "name": "四星雛角兜",
        "sci": "Brachysiderus quadrimaculatus tridentiger",
        "note": "薩蒂波產 WF1"
      },
      {
        "name": "彩虹兜",
        "sci": "Chalcocrates felschei",
        "stage": "卵/繁殖中"
      },
      {
        "name": "樟木怪刀",
        "sci": "Digonophorus elegans"
      },
      {
        "name": "蒙奇龍細身",
        "stage": "成蟲（2026.4 羽化）",
        "size": "80.83（體重/尺寸未明）",
        "note": "阿爾法克產"
      },
      {
        "name": "イネルミコリス",
        "sci": "Agaocephala inermicollis",
        "note": "WF1"
      }
    ],
    "otherItems": [
      "鼠婦（越南氣泡 Ardentiella sp. Blister 出苗）",
      "台灣爬蟲祭展品（8/14-16）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/sunmoonbeetle/p/DdJxQY5FMwf/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 36,
    "name": "莫莫爬寵 MOMOREPTILE",
    "cat": "reptile",
    "items": [
      "守宮（豹紋守宮、肥尾守宮）",
      "藍舌蜥等爬蟲",
      "生物飾品/守宮日用品/爬櫃"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=61551733120303"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/momo_reptiles/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/momo_reptiles/p/DeS8vg_TyNR/"
      }
    ],
    "verified": true,
    "note": "IG 顯示同日期（10/17–18）在台南「第五屆爬玩府城」參展，未找到本次松菸活動貼文，請現場確認。",
    "species": [
      {
        "name": "豹紋守宮"
      },
      {
        "name": "肥尾守宮"
      },
      {
        "name": "藍舌蜥"
      }
    ],
    "otherItems": [
      "守宮生物飾品（生物形態定格飾品）",
      "爬蟲保健諮詢/週邊設備/客製加熱墊"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/momo_reptiles/p/DeS8vg_TyNR/",
    "notes": [],
    "excludedSource": "IG DeS8vg_TyNR 為台南「爬玩府城」活動，不採用",
    "detail": {
      "sourceLabel": null,
      "info": [
        "IG @momo_reptiles DeS8vg_TyNR 為台南「爬玩府城」活動，不採用"
      ]
    }
  },
  {
    "no": 37,
    "name": "AMID Dorcus",
    "cat": "beetle",
    "items": [
      "久留米日本大鍬（展場限時優惠價）",
      "50mm up 優質單母（大鍬）",
      "西方長戟 不務正業系列"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/AMIDKC/"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/ookuwataiwan/posts/pfbid02ap4kGGC4RpWuCgcr3j9nq3AUnVMNqPrACw2EkAosXxADusJY4E2Rkh2cu4u9sTjUl"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/AMIDKC/posts/pfbid0PvHZeHb75jn1UmafoALvn4XNvcP6eqDMR9pPUzeJLpEWT8pu2aEJ2gjzm8Bn2kw5l"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [
      {
        "name": "久留米日本大鍬",
        "price": "展場限時優惠價（數字未在圖片列出）",
        "note": "展場限時優惠價"
      },
      {
        "name": "50mm up 優質單母",
        "size": "50mm up",
        "note": "大鍬"
      },
      {
        "name": "西方長戟 不務正業系列"
      }
    ],
    "listFound": false,
    "source": "https://www.facebook.com/ookuwataiwan/posts/pfbid02ap4kGGC4RpWuCgcr3j9nq3AUnVMNqPrACw2EkAosXxADusJY4E2Rkh2cu4u9sTjUl",
    "speciesSource": "event-mention",
    "detail": {
      "source": "https://www.facebook.com/ookuwataiwan/",
      "sourceLabel": "FB Ookuwa Taiwan 10/13 活動貼文",
      "info": [
        "與 Ookuwa Taiwan 同區，品項見 38 號"
      ]
    }
  },
  {
    "no": 38,
    "name": "Ookuwa Taiwan",
    "cat": "beetle",
    "items": [
      "久留米日本大鍬（展場限時優惠價）",
      "50mm up 優質單母（大鍬）",
      "西方長戟 不務正業系列"
    ],
    "lottery": false,
    "links": [
      {
        "label": "部落格",
        "url": "https://ookuwataiwan.pixnet.net/blog"
      },
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/ookuwataiwan/"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/ookuwataiwan/posts/pfbid02ap4kGGC4RpWuCgcr3j9nq3AUnVMNqPrACw2EkAosXxADusJY4E2Rkh2cu4u9sTjUl"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/AMIDKC/posts/pfbid0PvHZeHb75jn1UmafoALvn4XNvcP6eqDMR9pPUzeJLpEWT8pu2aEJ2gjzm8Bn2kw5l"
      }
    ],
    "verified": true,
    "note": "部落格以日本大鍬飼育、繁殖為主",
    "fromEventPost": true,
    "species": [
      {
        "name": "久留米日本大鍬",
        "price": "展場限時優惠價（數字未在圖片列出）",
        "note": "展場限時優惠價"
      },
      {
        "name": "50mm up 優質單母",
        "size": "50mm up",
        "note": "大鍬"
      },
      {
        "name": "西方長戟 不務正業系列"
      }
    ],
    "listFound": false,
    "source": "https://www.facebook.com/ookuwataiwan/posts/pfbid02ap4kGGC4RpWuCgcr3j9nq3AUnVMNqPrACw2EkAosXxADusJY4E2Rkh2cu4u9sTjUl",
    "speciesSource": "event-mention",
    "detail": {
      "source": "https://www.facebook.com/ookuwataiwan/",
      "sourceLabel": "FB Ookuwa Taiwan 10/13 活動貼文（無固定連結）",
      "info": [
        "Ookuwa 先前自家地圖標「第36、37桌」，以現場為準"
      ],
      "groups": [
        {
          "category": "活體",
          "items": [
            {
              "name": "久留米日大",
              "size": "",
              "spec": "數量多",
              "price": "未標價"
            },
            {
              "name": "優質單母",
              "size": "50mm 以上"
            },
            {
              "name": "西方長戟 (?)"
            }
          ]
        }
      ],
      "promos": [
        "展場限時優惠價",
        "今年買對蟲者可享加購價"
      ]
    }
  },
  {
    "no": 39,
    "name": "活養鮮蟲 FNC",
    "cat": "other",
    "items": [
      "黃金杜比亞、迷你麵包蟲（餌料蟲）",
      "餌料特調飼料",
      "肥尾守宮（現場展示）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "賣貨便",
        "url": "https://myship.7-11.com.tw/seller/profile?id=GM2501060302727"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/dubia_fnc/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/dubia_fnc/p/DbLk-o4D7jh/"
      }
    ],
    "verified": true,
    "note": "爬蟲用餌料蟲，歸入爬蟲類",
    "species": [
      {
        "name": "黃金杜比亞",
        "note": "餌料蟲"
      },
      {
        "name": "黃色迷你麵包蟲",
        "note": "九龍蟲，餌料蟲"
      }
    ],
    "otherItems": [
      "餌料特調飼料",
      "活體餌料批發（7-11 myship 賣場）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/dubia_fnc/p/DbLk-o4D7jh/",
    "detail": {
      "source": "https://www.instagram.com/dubia_fnc/",
      "sourceLabel": "IG @dubia_fnc 近期貼文",
      "info": [
        "無活動貼文"
      ],
      "groups": [
        {
          "category": "近期販售（非本次帶展清單）",
          "items": [
            {
              "name": "黃色迷你麵包蟲（九龍蟲）"
            },
            {
              "name": "黃金杜比亞"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 40,
    "name": "蜈所不蜘",
    "cat": "other",
    "items": [
      "蜘蛛（如委內瑞拉巨人粉紅腳）",
      "蜈蚣、蠍子",
      "餌料/特調飼料、樹皮/蝴蝶標本（蝦皮）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=61586841256424"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/wsbz_shop/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/wsbz_shop/p/DUZ5WGfEe7_/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "委內瑞拉巨人粉紅腳",
        "sci": "Theraphosa apophysis"
      },
      {
        "name": "納米比亞紅瑪瑙侏儒蠍／扁掌侏儒蠍"
      },
      {
        "name": "雙尾蠍"
      },
      {
        "name": "廣胸蟾椿",
        "sci": "Nerthra macrothorax"
      }
    ],
    "otherItems": [
      "餌料特調飼料（餌料/蟑螂蟋蟀）",
      "蝦皮賣場：樹皮/蝴蝶標本"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/wsbz_shop/p/DUZ5WGfEe7_/",
    "detail": {
      "source": "https://www.instagram.com/wsbz_shop/",
      "sourceLabel": "IG @wsbz_shop 近期貼文",
      "info": [
        "無活動貼文"
      ],
      "groups": [
        {
          "category": "近期販售（非本次帶展清單）",
          "items": [
            {
              "name": "委內瑞拉巨人粉紅腳"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 41,
    "name": "蟲蟲底家昆蟲生態館",
    "cat": "beetle",
    "items": [
      "甲蟲飼育服務/溫控室租放",
      "發酵木屑（巨砲大兜土G-Power、百寶萬用木屑等）",
      "標本製作"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/thebeetlesnest"
      },
      {
        "label": "露天賣場",
        "url": "https://www.ruten.com.tw/store/finidi/"
      }
    ],
    "verified": true,
    "note": "宜蘭羅東昆蟲生態館",
    "species": [
      {
        "name": "神馬大兜",
        "sci": "Augosoma centaurus",
        "stage": "成蟲（在庫個體）",
        "size": "85/90mm 成對；82/87mm 成對（親代CBF2 87×67mm）",
        "note": "迦納產，新品入荷"
      },
      {
        "name": "神馬大兜",
        "sci": "Augosoma centaurus",
        "stage": "成蟲",
        "size": "82/87mm",
        "note": "迦納 Ghana，成對"
      }
    ],
    "otherItems": [
      "發酵木屑（巨砲大兜土G-Power、百寶萬用木屑等）",
      "甲蟲飼育服務/溫控室租放",
      "標本製作",
      "宅配到府（貨到付款）"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 42,
    "name": "東久與爬蟲女子",
    "cat": "reptile",
    "items": [
      "鼠婦（鼠婦世大運等）",
      "豬鼻蛇、守宮等爬蟲",
      "爬蟲飾品"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/girl_and_reptile/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/girl_and_reptile/p/DZnHSD7hmPR/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/girl_and_reptile/p/DMsTMlxhq-M/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "海球鼠婦"
      },
      {
        "name": "豬鼻蛇"
      },
      {
        "name": "黑魔鬼竹節蟲"
      }
    ],
    "otherItems": [
      "鼠婦（鼠婦世大運等）",
      "守宮等爬蟲",
      "飼養盒（鼠婦飼養盒，賣貨連結）",
      "爬蟲飾品"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/girl_and_reptile/p/DZnHSD7hmPR/",
    "detail": {
      "source": "https://www.instagram.com/girl_and_reptile/",
      "sourceLabel": "IG @girl_and_reptile 簡介",
      "info": [
        "簡介確認 10/17–18 參展，未列品項"
      ]
    }
  },
  {
    "no": 43,
    "name": "五福與鼠婦日常",
    "cat": "other",
    "items": [
      "鼠婦活體（Cubaris 橘巨人等）",
      "鼠婦相關周邊/可愛小物"
    ],
    "lottery": true,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/wufu_isopods/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/wufu_isopods/p/DecMXE3zMIv/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "lotteryNote": "輪盤小遊戲: 消費滿$500即可參加一次輪盤小遊戲；獎項含 粉卡布*5、橘卡布*5、檸檬藍*5、奇摩子*10、粉丸*5 等，活體獎項與周邊都有. Event post 10/17-18 松山 43號攤位.",
    "species": [
      {
        "name": "古巴剌",
        "price": "10隻 $8,000",
        "note": "新血鼠婦，珍稀品系，圖上寫『新血・古巴刺』"
      }
    ],
    "otherItems": [
      "各式特色鼠婦（陸續展示與販售，未列品種）",
      "鼠婦周邊商品/可愛小物",
      "飼養盒與飼養土",
      "現場展示與販售"
    ],
    "listFound": true,
    "source": "https://www.instagram.com/wufu_isopods/p/DecMXE3zMIv/",
    "detail": {
      "source": "https://www.instagram.com/wufu_isopods/p/DecMXE3zMIv/",
      "sourceLabel": "IG @wufu_isopods 活動貼文",
      "groups": [
        {
          "category": "鼠婦",
          "items": [
            {
              "name": "新血・古巴刺",
              "size": "",
              "spec": "10 隻",
              "price": "$8,000"
            },
            {
              "name": "各式特色鼠婦"
            }
          ]
        },
        {
          "category": "用品",
          "items": [
            {
              "name": "食盆"
            },
            {
              "name": "飼養盒"
            },
            {
              "name": "飼養土"
            }
          ]
        }
      ],
      "promos": [
        "消費滿 $500 可轉轉盤"
      ]
    }
  },
  {
    "no": 44,
    "name": "虫合 MEET INSECTS",
    "cat": "beetle",
    "items": [
      "帥氣甲蟲（抽抽樂獎品：160mm河野血統 赫克力士長戟大兜蟲、128mm海神大兜蟲）",
      "活體昆蟲/飼養器材/標本/週邊耗材"
    ],
    "lottery": true,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/KinlongBeetles"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/KinlongBeetles/posts/pfbid02tdrBKx9nDKCGs9KRP96WYKNjiEnCq1Bs3Ls27ASPovAMxqFZYwPk4FREEbB8yygrl"
      }
    ],
    "verified": true,
    "note": "高雄三民區「虫合昆蟲專門」；抽抽樂每抽價格貼文未寫明。",
    "fromEventPost": true,
    "lotteryNote": "引福機抽抽樂 at 松山 昆蟲同樂會: '就交給引福機抽抽樂決定你與誰虫合！ 160mm河野血統 赫克力士長戟大兜蟲或 128mm海神大兜蟲可能飛到您手中！' Price per draw NOT stated in the post seen.",
    "species": [
      {
        "name": "赫克力士長戟大兜蟲",
        "stage": "成蟲（caption 寫 160mm）",
        "size": "160mm",
        "note": "抽抽樂獎品，河野血統"
      },
      {
        "name": "海神大兜蟲",
        "stage": "成蟲（caption 寫 128mm）",
        "size": "128mm",
        "note": "抽抽樂獎品"
      }
    ],
    "otherItems": [
      "活體昆蟲",
      "飼養器材",
      "標本",
      "週邊耗材"
    ],
    "listFound": false,
    "source": "https://www.facebook.com/KinlongBeetles/posts/pfbid02tdrBKx9nDKCGs9KRP96WYKNjiEnCq1Bs3Ls27ASPovAMxqFZYwPk4FREEbB8yygrl",
    "speciesSource": "event-mention",
    "detail": {
      "source": "https://www.facebook.com/KinlongBeetles",
      "sourceLabel": "FB 虫合 MEET INSECTS 活動海報",
      "info": [
        "價格未列"
      ],
      "promos": [
        "引福機抽抽樂"
      ],
      "tiers": [
        {
          "title": "抽抽樂大獎（二選一）",
          "items": [
            {
              "name": "赫克力士長戟大兜蟲（河野血統）",
              "size": "160mm"
            },
            {
              "name": "海神大兜蟲",
              "size": "128mm"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 45,
    "name": "coolinsects",
    "cat": "other",
    "items": [
      "Coolinsects 代理商品（2026 台灣國際昆蟲博覽會限定品，Feb 2026 post）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/profile.php?id=61557017731716"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "Coolinsects 代理商品（標本，eBay 代購，1美金:28台幣）",
      "世界鍬形蟲圖鑑（200美金訂單示例）"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文",
        "⚠ 主辦 10/02 對照表 45 號為「虫居」；本站名稱沿用另一版對照表「coolinsects」，請以現場為準"
      ]
    }
  },
  {
    "no": 46,
    "name": "昆蟲無限會社-南投甲蟲館",
    "cat": "other",
    "items": [
      "昆蟲標本（甲蟲｜蝴蝶｜螳螂｜蟬｜蜻蜓｜蜂類｜水生昆蟲等）",
      "乾貨（昆蟲乾燥/飼育乾貨）"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/insect308/"
      },
      {
        "label": "FB 活動貼文",
        "url": "https://www.facebook.com/insect308/posts/pfbid0kUKCxQXAEYg8E7rZ3fok44vgQZkg1nLAWZVGHbVB1fqHMrk3U9TeNQ9onWJEMEvRl"
      }
    ],
    "verified": true,
    "note": "南投市甲蟲館",
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "昆蟲標本（甲蟲｜蝴蝶｜螳螂｜蟬｜蜻蜓｜蜂類｜水生昆蟲等，未列品種）",
      "乾貨（昆蟲乾燥/飼育乾貨）"
    ],
    "listFound": false,
    "source": "https://www.facebook.com/insect308/posts/pfbid0kUKCxQXAEYg8E7rZ3fok44vgQZkg1nLAWZVGHbVB1fqHMrk3U9TeNQ9onWJEMEvRl",
    "detail": {
      "source": "https://www.facebook.com/insect308/posts/pfbid0aXo38XGuNTa88ai3yyt2g2UcBBCAiF9PUrNggCE7gEAvssgiCTMyhP3HKjJppeUAl",
      "sourceLabel": "FB 南投甲蟲館 活動貼文",
      "info": [
        "粉專另註：0917 起暫停販售所有標本 (?)"
      ],
      "groups": [
        {
          "category": "昆蟲標本與乾貨",
          "items": [
            {
              "name": "甲蟲"
            },
            {
              "name": "蝴蝶"
            },
            {
              "name": "螳螂"
            },
            {
              "name": "蟬"
            },
            {
              "name": "蜻蜓"
            },
            {
              "name": "蜂類"
            },
            {
              "name": "水生昆蟲"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 47,
    "name": "綠光蟲林 Creature Oasis",
    "cat": "beetle",
    "items": [
      "龍蝨（太平洋麗龍蝨少量、毛足大龍蝨、點刻三線大龍蝨、紅邊大龍蝨）"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/creatures_oasis/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/creatures_oasis/reel/DePK73-BSdx/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/creatures_oasis/p/DegTznTAWCT/"
      }
    ],
    "verified": true,
    "note": "彰化員林、嘉義有生態館",
    "fromEventPost": true,
    "species": [
      {
        "name": "太平洋麗龍蝨",
        "note": "少量，店內有少許可販售"
      },
      {
        "name": "毛足大龍蝨"
      },
      {
        "name": "點刻三線大龍蝨"
      },
      {
        "name": "紅邊大龍蝨"
      }
    ],
    "listFound": false,
    "source": "https://www.instagram.com/creatures_oasis/reel/DePK73-BSdx/",
    "speciesSource": "event-mention",
    "detail": {
      "source": "https://www.instagram.com/creatures_oasis/reel/DePK73-BSdx/",
      "sourceLabel": "IG @creatures_oasis 活動 reel",
      "info": [
        "「台北昆蟲同樂會見」"
      ],
      "groups": [
        {
          "category": "龍蝨",
          "items": [
            {
              "name": "太平洋麗龍蝨",
              "size": "",
              "spec": "少量"
            },
            {
              "name": "毛足大龍蝨"
            },
            {
              "name": "點刻三線大龍蝨"
            },
            {
              "name": "紅邊大龍蝨"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 48,
    "name": "艸虫工房",
    "cat": "other",
    "items": [
      "昆蟲工作坊（有昆蟲、有花草）— 具體商品未列",
      "（10/17-18 攤位宣傳：這週六、日歡迎來找我們聊天看蟲）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/people/%E8%89%B8%E8%99%AB%E9%96%93/100068140586010/"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "昆蟲工作坊（有昆蟲、有花草）",
      "昆蟲聊天/看蟲互動（攤位宣傳）"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "已確認參展，貼文未列品項（「這週六、日歡迎來找我們聊天看蟲~」）"
      ],
      "source": "https://www.facebook.com/share/p/1KjPkK1KoR/",
      "sourceLabel": "FB 艸虫工房 分享貼文"
    }
  },
  {
    "no": 49,
    "name": "Hobby Insect",
    "cat": "beetle",
    "items": [
      "新羽化 Cmf 紫血（公母或成對）",
      "昆蟲飼養個體（鍬形蟲類）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/hobbyinsect/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "note": "粉專貼文寫「60號攤位」，與官方對照表 49 號不同，請以現場為準。",
    "species": [
      {
        "name": "新羽化 Cmf 紫血",
        "stage": "成蟲（新羽化）",
        "note": "公母或成對"
      }
    ],
    "otherItems": [
      "昆蟲飼養個體（鍬形蟲類）"
    ],
    "listFound": false,
    "speciesSource": "event-mention",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 50,
    "name": "爬・蟲殿",
    "cat": [
      "beetle",
      "reptile"
    ],
    "items": [
      "各式珍稀爬蟲",
      "各國甲蟲",
      "甲蟲飼養耗材/爬蟲器材/標本"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/p/%E7%88%AC%E8%9F%B2%E6%AE%BF-61552282786486/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/reptile_hall/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/reptile_hall/p/Ddi68fWktQ_/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/reptile_hall/reel/DWvaVcSAAoZ/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/reptile_hall/p/DWJ89s9E47J/"
      }
    ],
    "verified": true,
    "note": "台北松江路，景美「蟲殿」新店，甲蟲爬蟲混合",
    "species": [
      {
        "name": "德勒塞鬼艷鍬形蟲",
        "sci": "Odontolabis delesserti",
        "stage": "成蟲（對）",
        "note": "南印度三鬼之一，釋出3對"
      },
      {
        "name": "印尼螽斯",
        "note": "WD母，3隻"
      },
      {
        "name": "秘魯鱷蜥"
      },
      {
        "name": "粗脖巨蜥"
      },
      {
        "name": "砂巨蜥"
      },
      {
        "name": "杜氏巨蜥"
      },
      {
        "name": "蘇拉威西澤巨蜥"
      },
      {
        "name": "熊貓藍舌蜥"
      },
      {
        "name": "白子紅鬣蜥",
        "note": "精選"
      },
      {
        "name": "藍泰加 / 黑白泰加"
      },
      {
        "name": "黑瘤地圖龜"
      },
      {
        "name": "日本石龜"
      },
      {
        "name": "白子廟龜"
      },
      {
        "name": "大守宮",
        "note": "變異基因庫"
      }
    ],
    "otherItems": [
      "爬蟲器材/餌料",
      "甲蟲溫控室（景美新館即將完工）",
      "甲蟲/爬蟲標本"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/reptile_hall/p/Ddi68fWktQ_/",
    "detail": {
      "source": "https://www.instagram.com/reptile_hall/",
      "sourceLabel": "IG @reptile_hall 近期貼文",
      "info": [
        "無活動貼文"
      ],
      "groups": [
        {
          "category": "近期販售（非本次帶展清單）",
          "items": [
            {
              "name": "德勒塞鬼艷",
              "size": "",
              "spec": "釋出3對"
            }
          ]
        }
      ]
    }
  },
  {
    "no": 51,
    "name": "萬物生長",
    "cat": "other",
    "items": [
      "昆蟲觀察盒（鼠婦/螞蟻觀察箱等）",
      "黏蟲紙",
      "乾燥植物（羊蹄甲等）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "賣貨便",
        "url": "https://myship.7-11.com.tw/general/detail/GM2407290440066"
      },
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/p/%E8%90%AC%E7%89%A9%E7%94%9F%E9%95%B7-100092206030642/"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "昆蟲觀察盒（鼠婦/螞蟻觀察箱等）",
      "黏蟲紙",
      "乾燥植物（羊蹄甲等）"
    ],
    "listFound": false,
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ]
    }
  },
  {
    "no": 52,
    "name": "星光",
    "cat": "other",
    "items": [
      "待確認"
    ],
    "lottery": null,
    "links": [],
    "verified": false,
    "species": [],
    "listFound": false
  },
  {
    "no": 53,
    "name": "昆蟲世界",
    "cat": "other",
    "items": [
      "昆蟲（依名稱推測）"
    ],
    "lottery": null,
    "links": [],
    "verified": false,
    "species": [],
    "listFound": false
  },
  {
    "no": 54,
    "name": "珍奇植物",
    "cat": "other",
    "items": [
      "食蟲植物（捕蟲堇、豬籠草等，食蟲植物批發/零售）"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/carnivo.r.us/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/carnivo.r.us/p/DegUjjyD9AH/"
      }
    ],
    "verified": true,
    "species": [
      {
        "name": "愛德華豬籠草",
        "sci": "Nepenthes edwardsiana"
      },
      {
        "name": "風鈴豬籠草 GXR",
        "sci": "Nepenthes campanulata (GXR)"
      },
      {
        "name": "勞氏豬籠草",
        "sci": "Nepenthes lowii"
      },
      {
        "name": "二齒豬籠草",
        "sci": "Nepenthes bicalcarata"
      },
      {
        "name": "N. veitchii Candy King",
        "sci": "Nepenthes veitchii 'Candy King'"
      },
      {
        "name": "古巴木實生苗",
        "sci": "Cubanola domingensis"
      }
    ],
    "otherItems": [
      "食蟲植物批發/零售（豬籠草、狸藻、捕蟲堇等）",
      "其他觀葉植物（日光萊姆、黃金白木蘇花等）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/carnivo.r.us/p/DegUjjyD9AH/",
    "detail": {
      "source": "https://www.instagram.com/carnivo.r.us/p/DegUjjyD9AH/",
      "sourceLabel": "IG @carnivo.r.us 活動貼文（8張）",
      "info": [
        "食蟲植物店；已確認參展，貼文未列品項"
      ]
    }
  },
  {
    "no": 55,
    "name": "蟲流忘返",
    "cat": "beetle",
    "items": [
      "長戟大兜蟲（DH飼育）等甲蟲",
      "甲蟲飼育周邊耗材（設計/批發）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Threads / IG",
        "url": "https://www.threads.com/@kh1_beetles"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/kh1_beetles/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/kh1_beetles/p/DU8Yk9YiaTu/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/kh1_beetles/p/DHndIpwy3hV/"
      }
    ],
    "verified": true,
    "note": "新北瑞芳",
    "species": [
      {
        "name": "長戟大兜蟲 DHH 血統",
        "stage": "成蟲（個體）",
        "size": "151+mm / 169+mm / 177+mm（貼文標示）",
        "note": "出品個體/種公"
      },
      {
        "name": "長戟大兜蟲 DHH F1",
        "stage": "成蟲",
        "size": "149+mm（角粗13.8-13.9）",
        "note": "河野先生帶來台灣的個體"
      }
    ],
    "otherItems": [
      "甲蟲飼育周邊耗材（設計/批發）",
      "甲蟲飼育分享（DHH 繁殖日記）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/kh1_beetles/p/DU8Yk9YiaTu/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 56,
    "name": "T.H.Y. TINY HOUSE",
    "cat": "beetle",
    "items": [
      "甲蟲/昆蟲販售（Portaly 昆蟲販售清單）",
      "飼養紀錄/甲蟲飼育"
    ],
    "lottery": false,
    "links": [
      {
        "label": "Portaly",
        "url": "https://portaly.cc/THY_tinyhouse"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/t.h.y.tinyhouse/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/t.h.y.tinyhouse/p/Dd6myhTk64p/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/t.h.y.tinyhouse/p/DdYx6aREysy/"
      }
    ],
    "verified": true,
    "note": "宜蘭甲蟲工作室",
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "甲蟲/昆蟲販售（清單在 Portaly 外部頁面，未在圖片列出）",
      "飼養紀錄/甲蟲飼育"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/t.h.y.tinyhouse/p/Dd6myhTk64p/",
    "detail": {
      "source": "https://www.instagram.com/t.h.y.tinyhouse/p/Dd6myhTk64p/",
      "sourceLabel": "IG @t.h.y.tinyhouse 活動貼文",
      "info": [
        "貼文確認 56 桌；未列品項"
      ]
    }
  },
  {
    "no": 57,
    "name": "MIF 覓狐星",
    "cat": "other",
    "items": [
      "插畫文創/文具周邊（MIF星 角色商品）",
      "甲蟲/龜類 相關插畫創作（非販售活體）"
    ],
    "lottery": null,
    "links": [
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/MifMALT/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/m2005ifuture/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/m2005ifuture/p/DaUgZgtkWM-/"
      }
    ],
    "verified": true,
    "species": [],
    "otherItems": [
      "插畫文創/文具周邊（MIF星 角色商品）",
      "2026文具展 C347 鳥島樂園（新品與滿額活動）"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/m2005ifuture/p/DaUgZgtkWM-/",
    "detail": {
      "info": [
        "未找到本次活動貼文"
      ],
      "noEventPost": true
    }
  },
  {
    "no": 58,
    "name": "咖鎂啦奇異動物書坊",
    "cat": "other",
    "items": [
      "特殊寵物原文書籍（《魅惑のクワガタ》鍬形蟲圖鑑等）",
      "龜類檔案夾/文創",
      "爬蟲相關用品（書店品項）"
    ],
    "lottery": false,
    "links": [
      {
        "label": "PChome 賣場",
        "url": "https://seller.pcstore.com.tw/S124790354/"
      },
      {
        "label": "Facebook",
        "url": "https://www.facebook.com/Kamavanan/"
      },
      {
        "label": "Instagram",
        "url": "https://www.instagram.com/kamavananasia/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/kamavananasia/reel/Deb9LePKYfH/"
      },
      {
        "label": "IG 活動貼文",
        "url": "https://www.instagram.com/kamavananasia/reel/DeeZnDwKY7u/"
      }
    ],
    "verified": true,
    "fromEventPost": true,
    "species": [],
    "otherItems": [
      "特殊寵物原文書籍《魅惑のクワガタ》（鍬形蟲圖鑑，收錄135種＋12亞種，攤位58現場有售）",
      "日本製みのじ 龜類檔案夾（雙面，列41種龜名，文創品）",
      "爬蟲相關書店品項"
    ],
    "listFound": false,
    "source": "https://www.instagram.com/kamavananasia/reel/Deb9LePKYfH/",
    "detail": {
      "source": "https://www.instagram.com/kamavananasia/reel/Deb9LePKYfH/",
      "sourceLabel": "IG @kamavananasia 活動 reel",
      "info": [],
      "groups": [
        {
          "category": "書籍",
          "items": [
            {
              "name": "《魅惑のクワガタ》鍬形蟲的魅力（135種＋12亞種）",
              "size": "",
              "spec": "攤位58現場有售",
              "price": "未標價"
            }
          ]
        }
      ]
    }
  }
];
