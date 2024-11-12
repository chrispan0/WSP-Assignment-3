git fetch
git pull
docker stop wsp-assignment-2
docker rm wsp-assignment-2
cd C:\Users\Administrator\Documents\WSP Assignment 2 Server\WSP-Assignment-2
docker build -t wsp-assignment-2 .
docker run -d -p 1337:4000 --name wsp-assignment-2 wsp-assignment-2:latest