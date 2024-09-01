# Cork climbing club

This project has been setup with [Astro](https://astro.build/)

To deploy you need to :

1. Run `npm install`
2. Build the website using `npm run build`
3. Push the new dist directory to the server using (replace `$VERSION` by your version, for example `v0.1`) : `scp -sr dist corkclt@ftp.cluster023.hosting.ovh.net:/home/corkclt/dist-$VERSION`

NB : You will be prompted for a password. This corresponds to the "corkclt" SFTP user password in OVH (if you don't have the password, you will have to change it [here](https://www.ovh.com/manager/#/web/hosting/corkclt.cluster023.hosting.ovh.net/ftp))

4. Go on the [OVH project page](https://www.ovh.com/manager/#/web/hosting/corkclt.cluster023.hosting.ovh.net/multisite) and change the root folder of the "corkclimbingclub.ie" and "www.corkclimbingclub.ie" to your new dist folder

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
