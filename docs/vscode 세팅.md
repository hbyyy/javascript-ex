# visual studio code setting

1. Visual Studio code 설치
   - https://code.visualstudio.com/docs/setup/linux
   - linux를 지원한다.
   - ubunto install - https://code.visualstudio.com/docs/setup/linux#_debian-and-ubuntu-based-distributions



2. vscode code runner extentions 설치
3. vscide live server extentions 설치



- python 가상 환경에서 npm, node 를 가상 환경으로 이용하기

  1. python 가상환경 생성, activate

     1. `pyenv virtualenv 3.7.5 <env_name>`

     2. `pyenv local <env_name>`

  2. nodeenv 설치
     1. `pip install nodeenv`
  3. node npm 세팅
     1. `nodeenv -p`
     2. 특정 node 버전 설치
        1. `nodeenv --node=4.5.0 -p`
  4. 확인
     1. `npm -v`
     2. `node -v`