
function get_query_param(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {
    // var is_en = get_query_param('lan') == 'en'
    // if (is_en) {
    //     //如果是英文，则调到英文页面（用来mas review mother fucker!!!!)
    //     window.location.href = 'embedded-en.html'
    // }
    //改成提供一个english的入口
    init_recommend_targets()
})

var g_targets = [

    {
        name: "机器之心",
        category: "科技",
        desc: "全球人工智能信息服务",
        icon: "http://fate2.oss-cn-shanghai.aliyuncs.com/feed-icons/jiqizhixin.ico",
        link: "likefeed://add-remote?name=%E6%9C%BA%E5%99%A8%E4%B9%8B%E5%BF%83&source=https%3A%2F%2Fwww.jiqizhixin.com%2F&type=0&csser=A%5Bclass%3D%22article-item__title%20js-open-modal%22%5D&min_len=0&desc=%E5%85%A8%E7%90%83%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E4%BF%A1%E6%81%AF%E6%9C%8D%E5%8A%A1%EF%BC%8C%E5%85%B3%E6%B3%A8%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E3%80%81%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%92%8C%E7%A5%9E%E7%BB%8F%E8%AE%A4%E7%9F%A5%E7%A7%91%E5%AD%A6%EF%BC%8C%E5%9D%9A%E6%8C%81%E4%B8%BA%E4%BB%8E%E4%B8%9A%E8%80%85%E6%8F%90%E4%BE%9B%E9%AB%98%E8%B4%A8%E9%87%8F%E5%86%85%E5%AE%B9%E5%92%8C%E5%A4%9A%E9%A1%B9%E4%BA%A7%E4%B8%9A%E6%9C%8D%E5%8A%A1%E3%80%82&icon=http%3A%2F%2Ffate2.oss-cn-shanghai.aliyuncs.com%2Ffeed-icons%2Fjiqizhixin.ico&charset=utf-8&config=%7B%22dynamic%22%3A%22false%22%2C%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "摄影江湖",
        category: "播客",
        desc: "推荐，高磊是战地摄影，听他讲点事",
        icon: "http://fate2.oss-cn-shanghai.aliyuncs.com/feed-icons/sheying.jpg",
        link: "likefeed://add-remote?name=%E6%91%84%E5%BD%B1%E6%B1%9F%E6%B9%96&source=http%3A%2F%2Fwww.ximalaya.com%2Falbum%2F14351375.xml&type=1&csser=&min_len=0&desc=%E3%80%90%E6%8E%A8%E8%8D%90%EF%BC%8C%E9%AB%98%E7%A3%8A%E6%98%AF%E6%88%98%E5%9C%B0%E6%91%84%E5%BD%B1%E3%80%91%E8%AE%B2%E6%91%84%E5%BD%B1%EF%BC%8C%E8%AF%B4%E7%9C%9F%E8%AF%9D%E3%80%82%E6%88%91%E6%98%AF%E6%91%84%E5%BD%B1%E5%B8%88%E9%AB%98%E7%A3%8A%E3%80%82&icon=http%3A%2F%2Ffate2.oss-cn-shanghai.aliyuncs.com%2Ffeed-icons%2Fsheying.jpg&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "V2EX-创意",
        category: "社区",
        desc: "way to explore",
        icon: "http://fate2.oss-cn-shanghai.aliyuncs.com/feed-icons/vcy.png",
        link: "likefeed://add-remote?name=V2EX%20-%20%E5%88%9B%E6%84%8F&source=https%3A%2F%2Fwww.v2ex.com%2Ffeed%2Ftab%2Fcreative.xml&type=1&csser=&min_len=0&desc=way%20to%20explore&icon=http%3A%2F%2Ffate2.oss-cn-shanghai.aliyuncs.com%2Ffeed-icons%2Fvcy.png&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "[pixiv]综合月榜",
        category: "二次元",
        desc: "p站排行榜【需科学上网】",
        icon: "http://fate2.oss-cn-shanghai.aliyuncs.com/feed-icons/p.ico",
        link: "likefeed://add-remote?name=%5Bpixiv%5D%20%E7%BB%BC%E5%90%88%E6%9C%88%E6%A6%9C&source=https%3A%2F%2Fwww.pixiv.net%2Franking.php%3Fmode%3Dmonthly&type=0&csser=h2%20a&min_len=0&desc=P%E7%AB%99%E6%9C%88%E6%8E%92%E8%A1%8C%E6%A6%9C%E3%80%90%E5%B7%B2%E4%BF%AE%E5%A4%8D%E9%87%8D%E5%A4%8D%E3%80%91%E3%80%90%E7%A7%91%E5%AD%A6%E4%B8%8A%E7%BD%91%E3%80%91&icon=https%3A%2F%2Fwww.pixiv.net%2Ffavicon.ico&charset=utf-8&config=%7B%22query_fields%22%3A%22illust_id%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "bilibili月度热排",
        category: "二次元",
        desc: "月度综合热门排行榜",
        icon: "https://www.bilibili.com/favicon.ico",
        link: "likefeed://add-remote?name=bilibili%E6%9C%88%E5%BA%A6%E7%83%AD%E6%8E%92&source=https%3A%2F%2Fwww.bilibili.com%2Franking%2Fall%2F0%2F0%2F30&type=0&csser=.title&min_len=0&desc=%E6%9C%88%E5%BA%A6%E7%BB%BC%E5%90%88%E7%83%AD%E9%97%A8%E6%8E%92%E5%BA%8F&icon=https%3A%2F%2Fwww.bilibili.com%2Ffavicon.ico&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "VICE中国",
        category: "历史文化",
        desc: "世界在下沉，我们在狂欢",
        icon: "http://www.vice.cn/public/assets/images/vice/favicons/favicon-128.png",
        link: "likefeed://add-remote?name=VICE%E4%B8%AD%E5%9B%BD&source=http%3A%2F%2Fwww.vice.cn%2Findex%2Frss%2F&type=1&csser=&min_len=0&desc=%E5%85%A8%E7%90%83%E9%9D%92%E5%B9%B4%E6%96%87%E5%8C%96%E4%B9%8B%E5%A3%B0%EF%BC%9A%E4%B8%96%E7%95%8C%E5%9C%A8%E4%B8%8B%E6%B2%89%EF%BC%8C%E6%88%91%E4%BB%AC%E5%9C%A8%E7%8B%82%E6%AC%A2&icon=http%3A%2F%2Fwww.vice.cn%2Fpublic%2Fassets%2Fimages%2Fvice%2Ffavicons%2Ffavicon-128.png&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "TED Radio Hour",
        category: "播客",
        desc: "英语",
        icon: "http://fate2.oss-cn-shanghai.aliyuncs.com/feed-icons/ted.jpg",
        link: "likefeed://add-remote?name=TED%20Radio%20Hour&source=https%3A%2F%2Fwww.npr.org%2Frss%2Fpodcast.php%3Fid%3D510298&type=1&csser=&min_len=0&desc=%E3%80%90%E5%8A%A0%E8%BD%BD%E8%BE%83%E6%85%A2%E3%80%91%E8%8B%B1%E8%AF%AD&icon=http%3A%2F%2Ffate2.oss-cn-shanghai.aliyuncs.com%2Ffeed-icons%2Fted.jpg&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },

    {
        name: "虎嗅网",
        category: "新闻",
        desc: "聚合优质的创新信息与人群，捕获精选|深度|犀利的商业科技资讯。",
        icon: "https://static.huxiucdn.com/common/image/apple-touch-icon-180x180.png",
        link: "likefeed://add-remote?name=%E8%99%8E%E5%97%85%E7%BD%91&source=http%3A%2F%2Fwww.huxiu.com&type=0&csser=h2%20a&min_len=0&desc=%E8%81%9A%E5%90%88%E4%BC%98%E8%B4%A8%E7%9A%84%E5%88%9B%E6%96%B0%E4%BF%A1%E6%81%AF%E4%B8%8E%E4%BA%BA%E7%BE%A4%EF%BC%8C%E6%8D%95%E8%8E%B7%E7%B2%BE%E9%80%89%7C%E6%B7%B1%E5%BA%A6%7C%E7%8A%80%E5%88%A9%E7%9A%84%E5%95%86%E4%B8%9A%E7%A7%91%E6%8A%80%E8%B5%84%E8%AE%AF%E3%80%82%E5%9C%A8%E8%99%8E%E5%97%85%EF%BC%8C%E4%B8%8D%E9%94%99%E8%BF%87%E4%BA%92%E8%81%94%E7%BD%91%E7%9A%84%E6%AF%8F%E4%B8%AA%E9%87%8D%E8%A6%81%E6%97%B6%E5%88%BB%E3%80%82&icon=https%3A%2F%2Fstatic.huxiucdn.com%2Fcommon%2Fimage%2Fapple-touch-icon-180x180.png&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "36Kr-NEXT",
        category: "创业和产品",
        desc: "不错过任何一个新产品",
        icon: "http://next.36kr.com/favicon.ico",
        link: "likefeed://add-remote?name=36kr-NEXT&source=http%3A%2F%2Fnext.36kr.com%2Ffeed&type=1&csser=&min_len=0&desc=%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E4%B8%80%E4%B8%AA%E6%96%B0%E4%BA%A7%E5%93%81&icon=http%3A%2F%2Fnext.36kr.com%2Ffavicon.ico&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "ZEALER",
        category: "消费电子",
        desc: "科技生活方式第一站",
        icon: "http://www.zealer.com/favicon.ico",
        link: "likefeed://add-remote?name=ZEALER&source=http%3A%2F%2Fwww.zealer.com%2F&type=0&csser=.wrap%20a&min_len=8&desc=%E3%80%90%E5%B7%B2%E4%BF%AE%E5%A4%8D%E3%80%91%E7%A7%91%E6%8A%80%E7%94%9F%E6%B4%BB%E6%96%B9%E5%BC%8F%E7%AC%AC%E4%B8%80%E7%AB%99&icon=http%3A%2F%2Fwww.zealer.com%2Ffavicon.ico&charset=utf-8&config="
    },
    {
        name: "蕊希电台",
        category: "播客",
        desc: "一点点慰藉和感动",
        icon: "http://fdfs.xmcdn.com/group5/M09/32/C0/wKgDtVSvSMfyOmR9AB_ynf1tXFE432.jpg",
        link: "likefeed://add-remote?name=%E8%95%8A%E5%B8%8C%E7%94%B5%E5%8F%B0&source=http%3A%2F%2Fwww.ximalaya.com%2Falbum%2F321787.xml&type=1&csser=&min_len=0&desc=&icon=http%3A%2F%2Ffdfs.xmcdn.com%2Fgroup5%2FM09%2F32%2FC0%2FwKgDtVSvSMfyOmR9AB_ynf1tXFE432.jpg&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "黑水档案",
        category: "播客",
        desc: "刑侦纪实故事",
        icon: "http://fdfs.xmcdn.com/group35/M07/76/5E/wKgJnFs3OuaSVko7AAaqf-ViVt0941.jpg",
        link: "likefeed://add-remote?name=%E9%BB%91%E6%B0%B4%E6%A1%A3%E6%A1%88&source=http%3A%2F%2Fwww.ximalaya.com%2Falbum%2F11390092.xml&type=1&csser=&min_len=0&desc=&icon=http%3A%2F%2Ffdfs.xmcdn.com%2Fgroup35%2FM07%2F76%2F5E%2FwKgJnFs3OuaSVko7AAaqf-ViVt0941.jpg&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "豆瓣电影热门影评",
        category: "电影图书",
        desc: "在国情下，道说银幕之外",
        icon: "https://img3.doubanio.com/f/movie/d59b2715fdea4968a450ee5f6c95c7d7a2030065/pics/movie/apple-touch-icon.png",
        link: "likefeed://add-remote?name=%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E7%83%AD%E9%97%A8%E5%BD%B1%E8%AF%84&source=https%3A%2F%2Fmovie.douban.com%2F&type=0&csser=.review-bd%20h3%20a&min_len=0&desc=%E5%B0%8F%E5%BF%83%E8%A2%AB%E5%89%A7%E9%80%8F&icon=https%3A%2F%2Fimg3.doubanio.com%2Ff%2Fmovie%2Fd59b2715fdea4968a450ee5f6c95c7d7a2030065%2Fpics%2Fmovie%2Fapple-touch-icon.png&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "鬼影人间",
        category: "播客节目",
        desc: "心慌慌，听恐怖故事",
        icon: "http://fate2.oss-cn-shanghai.aliyuncs.com/feed-icons/gui.png",
        link: "likefeed://add-remote?name=%E9%AC%BC%E5%BD%B1%E4%BA%BA%E9%97%B4&source=http%3A%2F%2Fwww.ximalaya.com%2Falbum%2F226702.xml&type=1&csser=&min_len=0&desc=%E4%BD%A0%E7%9A%84%E8%83%86%E5%AD%90%E5%A4%A7%E5%90%97%EF%BC%9F&icon=http%3A%2F%2Ffate2.oss-cn-shanghai.aliyuncs.com%2Ffeed-icons%2Fgui.png&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "36Kr-NEXT",
        category: "创业和产品",
        desc: "不错过任何一个新产品",
        icon: "http://next.36kr.com/favicon.ico",
        link: "likefeed://add-remote?name=36kr-NEXT&source=http%3A%2F%2Fnext.36kr.com%2Ffeed&type=1&csser=&min_len=0&desc=%E4%B8%8D%E9%94%99%E8%BF%87%E4%BB%BB%E4%BD%95%E4%B8%80%E4%B8%AA%E6%96%B0%E4%BA%A7%E5%93%81&icon=http%3A%2F%2Fnext.36kr.com%2Ffavicon.ico&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "晓说2018",
        category: "播客节目",
        desc: "每周五不见不散，听矮大紧老师谈笑风生",
        icon: "http://fdfs.xmcdn.com/group27/M05/D5/6B/wKgJW1kax1LiB_RyAAOyBznNTh4821.jpg",
        link: "likefeed://add-remote?name=%E6%99%93%E8%AF%B42018&source=http%3A%2F%2Fwww.ximalaya.com%2Falbum%2F8141106.xml&type=1&csser=&min_len=0&desc=%E9%AB%98%E6%99%93%E6%9D%BE%EF%BC%8C%E3%80%8A%E6%99%93%E8%AF%B42018%E3%80%8B%EF%BC%8C%E6%AF%8F%E5%91%A8%E4%BA%94%E4%B8%8D%E8%A7%81%E4%B8%8D%E6%95%A3%EF%BC%8C%E5%90%AC%E7%9F%AE%E5%A4%A7%E7%B4%A7%E8%80%81%E5%B8%88%E8%B0%88%E7%AC%91%E9%A3%8E%E7%94%9F%EF%BC%8C%E8%81%8A%E8%B6%85%E7%BA%A7%E7%A2%97%E3%80%81%E9%A2%81%E5%A5%96%E5%AD%A3%EF%BC%8C%E8%AE%B2%E8%AE%B2%E6%BB%A1%E6%98%AF%E5%8E%86%E5%8F%B2%E5%B9%B2%E8%B4%A7%E7%9A%84%E5%B0%8F%E6%95%85%E4%BA%8B%E3%80%82%E7%93%9C%E5%AD%90%E3%80%81%E5%95%A4%E9%85%92%E3%80%81%E5%B0%8F%E6%9D%BF%E5%87%B3%EF%BC%8C%E5%B7%B2%E7%BB%8F%E4%B8%BA%E5%90%84%E4%BD%8D%E5%AE%A2%E5%AE%98%E5%A4%87%E5%A5%BD%EF%BC%8C%E5%8F%AA%E7%AD%89%E4%BD%A0%E6%9D%A5%E5%90%AC%E3%80%82&icon=http%3A%2F%2Ffdfs.xmcdn.com%2Fgroup27%2FM05%2FD5%2F6B%2FwKgJW1kax1LiB_RyAAOyBznNTh4821.jpg&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "虎嗅网",
        category: "新闻",
        desc: "聚合优质的创新信息与人群，捕获精选|深度|犀利的商业科技资讯。",
        icon: "https://static.huxiucdn.com/common/image/apple-touch-icon-180x180.png",
        link: "likefeed://add-remote?name=%E8%99%8E%E5%97%85%E7%BD%91&source=http%3A%2F%2Fwww.huxiu.com&type=0&csser=h2%20a&min_len=0&desc=%E8%81%9A%E5%90%88%E4%BC%98%E8%B4%A8%E7%9A%84%E5%88%9B%E6%96%B0%E4%BF%A1%E6%81%AF%E4%B8%8E%E4%BA%BA%E7%BE%A4%EF%BC%8C%E6%8D%95%E8%8E%B7%E7%B2%BE%E9%80%89%7C%E6%B7%B1%E5%BA%A6%7C%E7%8A%80%E5%88%A9%E7%9A%84%E5%95%86%E4%B8%9A%E7%A7%91%E6%8A%80%E8%B5%84%E8%AE%AF%E3%80%82%E5%9C%A8%E8%99%8E%E5%97%85%EF%BC%8C%E4%B8%8D%E9%94%99%E8%BF%87%E4%BA%92%E8%81%94%E7%BD%91%E7%9A%84%E6%AF%8F%E4%B8%AA%E9%87%8D%E8%A6%81%E6%97%B6%E5%88%BB%E3%80%82&icon=https%3A%2F%2Fstatic.huxiucdn.com%2Fcommon%2Fimage%2Fapple-touch-icon-180x180.png&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    },
    {
        name: "郭德纲历年相声整理",
        category: "播客",
        desc: "网友钢丝整理本专辑供大家欣赏",
        icon: "http://fate2.oss-cn-shanghai.aliyuncs.com/feed-icons/guodegang.jpg",
        link: "likefeed://add-remote?name=%E9%83%AD%E5%BE%B7%E7%BA%B2%E5%8E%86%E5%B9%B4%E7%9B%B8%E5%A3%B0%E6%95%B4%E7%90%86&source=http%3A%2F%2Frss.kaolafm.com%2FMZ_RSS%2Frss%2F1100000107435%2Falbum.xml&type=1&csser=&min_len=0&desc=%E6%9C%AC%E4%BA%BA%E9%93%81%E6%9D%86%E9%92%A2%E4%B8%9D%EF%BC%8C%E5%BA%94%E5%B9%BF%E5%A4%A7%E5%90%AC%E5%8F%8B%E8%A6%81%E6%B1%82%E6%95%B4%E7%90%86%E6%9C%AC%E4%B8%93%E8%BE%91%E4%BE%9B%E5%A4%A7%E5%AE%B6%E6%AC%A3%E8%B5%8F%E3%80%82&icon=http%3A%2F%2Ffate2.oss-cn-shanghai.aliyuncs.com%2Ffeed-icons%2Fguodegang.jpg&charset=utf-8&config=%7B%22dynamic%22%3A%22false%22%2C%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    }
]

function init_recommend_targets() {
    //只放3个
    g_targets.slice(0, 3).forEach((target) => {
        var new_ele = $('#target_template').clone()
        new_ele.removeAttr('id')
        new_ele.find('img').attr("src", target.icon)
        new_ele.find('.target-item-name').text(target.name)
        new_ele.find('.target-item-category').text(target.category)
        new_ele.find('.target-item-description').text(target.desc)
        new_ele.attr('href', target.link)
        new_ele.appendTo('#target_list')
        console.log(target.name)
    })
}