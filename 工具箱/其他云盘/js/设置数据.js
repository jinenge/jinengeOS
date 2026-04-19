// 背景图片 Cookies 
function setBgImg(bg_img) {
    if (bg_img) {
        Cookies.set('bg_img', bg_img, {
            expires: 36500
        });
        return true;
    }
    return false;
}

// 获取背景图片 Cookies
function getBgImg() {
    var bg_img_local = Cookies.get('bg_img');
    if (bg_img_local && bg_img_local !== "{}") {
        return JSON.parse(bg_img_local);
    } else {
        setBgImg(bg_img_preinstall);
        return bg_img_preinstall;
    }
}

var bg_img_preinstall = {
    "type": "1", // 1:默认背景 2:每日一图 3:随机风景 4:随机动漫
    "path": "http://jinenyy.vip/wallpaper", //自定义图片
};


// 更改背景图片
function setBgImgInit() {
    var bg_img = getBgImg();
    $("input[name='wallpaper-type'][value=" + bg_img["type"] + "]").click();

    switch (bg_img["type"]) {
        case "1":
            var pictures = new Array();
            pictures[0] = './img/1.jpeg';
            pictures[1] = './img/2.jpeg';
            pictures[2] = './img/3.jpeg';
            pictures[3] = './img/4.jpeg';
            pictures[4] = './img/5.jpeg';
            pictures[5] = './img/6.jpeg';
            pictures[6] = './img/7.jpeg';
            pictures[7] = './img/8.jpeg';
            pictures[8] = './img/9.jpeg';
            pictures[9] = './img/10.jpeg';
            pictures[10] = './img/11.jpeg';
            pictures[11] = './img/12.jpeg';
            pictures[12] = './img/13.jpeg';
            pictures[13] = './img/14.jpeg';
            pictures[14] = './img/15.jpeg';
            pictures[15] = './img/16.jpeg';
            pictures[16] = './img/17.jpeg';
            pictures[17] = './img/18.jpeg';
            pictures[18] = './img/19.jpeg';
            pictures[19] = './img/20.jpeg';
            pictures[20] = './img/21.jpeg';
            pictures[21] = './img/22.jpeg';
            pictures[22] = './img/23.jpeg';
            pictures[23] = './img/24.jpeg';
            pictures[24] = './img/25.jpeg';
            pictures[25] = './img/26.jpeg';
            pictures[26] = './img/27.jpeg';
            pictures[27] = './img/28.jpeg';
            pictures[28] = './img/29.jpeg';
            var rd = Math.floor(Math.random() * 25);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            break;
        case "2":
            $('#bg').attr('src', 'https://api.dujin.org/bing/1920.php'); //必应每日
            break;
        case "3":
            $('#bg').attr('src', 'https://api.ixiaowai.cn/gqapi/gqapi.php'); //随机风景
            break;
        case "4":
            $('#bg').attr('src', 'https://api.ixiaowai.cn/api/api.php'); //随机动漫
            break;
    }
}

$(document).ready(function () {
    // 壁纸数据加载
    setBgImgInit();
    // 设置背景图片
    $("#wallpaper").on("click", ".set-wallpaper", function () {
        var type = $(this).val();
        var bg_img = getBgImg();
        bg_img["type"] = type;

        if (type === "1") {
            setBgImg(bg_img);
            var pictures = new Array();
            pictures[0] = './img/1.jpg';
            pictures[1] = './img/2.jpg';
            pictures[2] = './img/3.jpg';
            pictures[3] = './img/4.jpg';
            pictures[4] = './img/5.jpg';
            pictures[5] = './img/6.jpg';
            pictures[6] = './img/7.jpg';
            pictures[7] = './img/8.jpg';
            pictures[8] = './img/9.jpg';
            pictures[9] = './img/10.jpg';
            var rd = Math.floor(Math.random() * 10);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "2") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.dujin.org/bing/1920.php'); //必应每日
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "3") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.ixiaowai.cn/gqapi/gqapi.php'); //随机风景
            iziToast.show({
                message: '壁纸设置成功',
            });
        }

        if (type === "4") {
            setBgImg(bg_img);
            $('#bg').attr('src', 'https://api.ixiaowai.cn/api/api.php'); //随机动漫
            iziToast.show({
                message: '壁纸设置成功',
            });
        }
    });
});