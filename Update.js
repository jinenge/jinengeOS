//设置当前版本数据
var versionName = "2.1";
var versionCode = 260413;
var buildDate = "2026年04月13日";
//函数：获取最新版本数据
function checkUpdate() {
    var getUpdateData = new XMLHttpRequest();
    getUpdateData.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            updateData = JSON.parse(this.responseText);
            processUpdate();
        }
    };
    getUpdateData.open("GET", "update/version.json", true);
    getUpdateData.send();
}