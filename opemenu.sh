#!/bin/bash
echo "==========================================="
echo "          欢迎来到Akilarの糖果屋！"
echo "==========================================="
KoishiPath=$(cd "$(dirname "$0")"; pwd)
cd ${KoishiPath}
printf "\033[32m koishi根目录："${KoishiPath}"\033[0m\n"

printf "\033[32m [0] \033[0m 退出菜单\n"
printf "\033[32m [1] \033[0m 启动koishi\n"
printf "\033[32m [2] \033[0m 从Github拉取最新版本\n"
printf "\033[32m [3] \033[0m 从Github强制拉取最新版本（覆盖本地内容）\n"
printf "\033[32m [4] \033[0m 提交本地修改到GitHub\n"
printf "\033[32m [5] \033[0m 强制提交本地修改到GitHub（覆盖远程内容）\n"
printf "\033[32m [6] \033[0m 重新安装依赖\n"
printf "请选择需要的功能，默认选择\033[32m [1] \033[0m启动Koishi\n"
printf "选择："
read answer
if [ "$answer" = "1" ] || [ "$answer" = "" ]; then
printf "\033[32mINFO \033[0m Daphne苏醒中......\n"
yarn koishi start
exec ${KoishiPath}/opemenu.sh
else
if [ "$answer" = "2" ]; then
printf "\033[32mINFO \033[0m 正在从Github拉取最新版本...\n"
git pull origin master #2020年10月后github新建仓库默认分支改为main，注意更改
printf "\033[32mINFO \033[0m 拉取完毕，所有配置已是最新版本！\n"
sleep 1s
exec ${KoishiPath}/opemenu.sh
else
if [ "$answer" = "3" ]; then
printf "\033[32mINFO \033[0m 正在从Github强制拉取最新版本...\n"
git fetch --all
printf "\033[32mINFO \033[0m 您的本地文件将被覆盖...\n"
git reset --hard origin/master #2020年10月后github新建仓库默认分支改为main，注意更改
printf "\033[32mINFO \033[0m 覆盖完毕，您的配置已与远端同步！\n"
sleep 1s
exec ${KoishiPath}/opemenu.sh
else
if [ "$answer" = "4" ]; then
printf "\033[32mINFO \033[0m 正在提交最新修改到GitHub...\n"
git add .
git commit -m "Update config"
git push origin master #2020年10月后github新建仓库默认分支改为main，注意更改
printf "\033[32mINFO \033[0m 提交完毕，您的修改已上传至Github！\n"
sleep 1s
exec ${KoishiPath}/opemenu.sh
else
if [ "$answer" = "5" ]; then
printf "\033[32mINFO \033[0m 正在强制提交修改到GitHub...\n"
git add .
git commit -m "Update config"
git push origin master -f #2020年10月后github新建仓库默认分支改为main，注意更改
printf "\033[32mINFO \033[0m 提交完毕，您的本地内容已覆盖远程内容！\n"
sleep 1s
exec ${KoishiPath}/opemenu.sh
else
if [ "$answer" = "6" ]; then
printf "\033[32mINFO \033[0m 正在清空当前依赖环境 ...\n"
rm node_modules
printf "\033[32mINFO \033[0m 正在重新安装当前依赖环境 ...\n"
yarn
sleep 2s
exec ${KoishiPath}/opemenu.sh
else
if [ "$answer" = "0" ]; then
printf "\033[32mINFO \033[0m 欢迎下次光临！\n"
sleep 1s
exit 0
else
printf "\033[31mERROR \033[0m 输入错误，请返回重新选择...\n"
sleep 1s
exec ${KoishiPath}/opemenu.sh
fi
fi
fi
fi
fi
fi
fi
