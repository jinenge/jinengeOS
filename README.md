<!doctype html>
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <link rel="icon" type="image/svg+xml" href="https://jinenge.us.kg/图标/logo.png"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>进恩哥系统客户端更新</title> 
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scrollbar-width: thin;
        }
        body {
            /* 统一冷深蓝无发黄渐变背景 */
            background: linear-gradient(140deg, #08081a 0%, #0c0c2c 50%, #060622 100%);
            min-height: 100vh;
            padding: 20px 12px;
            font-family: system-ui, sans-serif;
        }
        .container {
            max-width: 640px;
            margin: 0 auto;
        }
        /* 顶部标题区域 */
        .title-wrap {
            text-align: center;
            margin-bottom: 30px;
        }
        /* 替换刺眼七彩文字为柔和渐变，低饱和冷色 */
        #nr {
            font-size: 18px;
            font-weight: 600;
            background: linear-gradient(90deg, #88ccff, #b39dff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .title-wrap i {
            color: #0099cc !important;
            margin-right: 6px;
        }
        /* 更新卡片 */
        .item {
            background: rgba(30, 30, 60, 0.35);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 20px;
            padding: 24px;
            box-shadow: 0 0 16px rgba(92, 47, 194, 0.15);
        }
        .item img {
            width: 90px;
            height: 90px;
            display: block;
            margin: 0 auto 16px;
            border-radius: 12px;
        }
        .filename h2 {
            color: #ffffff;
            text-align: center;
            margin-bottom: 16px;
            font-size: 22px;
        }
        .filedata {
            color: #e8edff;
            line-height: 1.8;
            font-size: 15px;
            margin: 6px 0;
        }
        .filedata span:first-child {
            color: #99ddff;
            font-weight: 500;
        }
        /* 下载按钮 */
        .btn {
            text-align: center;
            margin-top: 24px;
        }
        .btn button {
            padding: 10px 32px;
            border: none;
            border-radius: 32px;
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            background: linear-gradient(90deg, #5c2fc2, #0099cc);
            cursor: pointer;
            transition: 0.25s ease;
        }
        .btn button:hover {
            opacity: 0.85;
            transform: scale(1.02);
        }
        /* 底部提示框 */
        fieldset {
            margin-top: 30px;
            border: 1px solid rgba(231, 29, 54, 0.4);
            border-radius: 12px;
            padding: 14px;
        }
        legend {
            color: #ff7a8c;
            font-weight: 500;
            padding: 0 8px;
        }
        fieldset font {
            color: #e8edff;
            font-size: 14px;
            line-height: 1.7;
        }
    </style>
</head> 
<body> 
    <div class="container"> 
        <!--标题-->
        <div class="title-wrap">
            <i class="fa-solid fa-shield-check" style="color:#0099cc;"></i>
            <span id="nr">进恩哥系统APP更新通道</span>
        </div>

        <div class="item"> 
            <img src="https://jinenge.us.kg/图标/logo.png"/>
            <div class="filename"> 
                <h2>进恩哥系统 V2.2</h2>
                <div class="filedata"> <span>更新内容：</span></div> 
                <div class="filedata"> <span>1、更新 新版UI系统界面</span></div> 
                <div class="filedata"> <span>2、更新 开机动画+语音</span></div> 
                <div class="filedata"> <span>3、更新 通讯录，拨号，短信</span></div>
                <div class="filedata"> <span>4、新增公共留言板</span></div> 
                <div class="filedata"> <span>5、把系统集成到APP去</span></div>
                <div class="filedata"> <span>断网时可正常打开APP</span></div> 
                <div class="filedata"> <span>2026年06月03日更新</span> 
                </div> 
            </div> 
            <div class="btn"> 
                <button onclick="go('update/进恩哥系统2.2.apk')">点击下载</button> 
            </div> 
        </div>

        <form>
            <fieldset>
                <legend>注意</legend>
                <font color="#E71D36">该应用仅对安卓系统开发，ios版本暂时不做开发，本应用没对各大应用商店上架，仅供学习参考使用，请于24小时内从您的设备中进行删除/卸载操作，感谢您的支持！</font>
            </fieldset>
        </form>
    </div>

    <script>
    function go(path) {
        location.href = path;
    }
    </script>  
</body>
</html>
