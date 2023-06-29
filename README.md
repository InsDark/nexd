# Getting Started

## Setup delopment enviroment

1. Clone the repository `git clone https://github.com/InsDark/nexd.git` 
2. Move to the folder repo `cd nexd`
3. Install all the dependencies `npm install` or `pnpm install`
4. Run the dev server `npm run dev`

Congrats the dev setup is done

## Setup production enviroment

### Requirements

- [nssm](https://nssm.cc/download)
- [Node.js](https://nodejs.org/en)

### Steps

1. Clone the repo `git clone https://github.com/InsDark/nexd.git` on the root of your C:\\ drive
2. Move to the folder repo `cd nexd`
3. Install all the dependencies `npm install` or `pnpm install`
4. Make the build `npm run build`
5. Move where you install nssm `C:\\nssm\\win64`
6. Set the service name and its location `nssm install <Service-Name> C:\nexd\start.bat`
7. Set the app directory `nssm set <Service-Name> appDirectory C:\nexd`
8. This is optional but it's to know if something happens with the server `nssm set <Service-Name> AppStdout D:\logfiles\out.txt` `nssm set Website-Service AppStderr D:\logfiles\err.txt` PD: The log files can be placed anywhere
