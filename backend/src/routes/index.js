const fs = require("fs");
const path = require("path");
const express = require("express");
const authRoutes = require("./authRoutes");
const doctorRoutes = require("./doctorRoutes");
const appointmentRoutes = require("./appointmentRoutes");

exports.loadAppRoutes = (app) => {
  const registeredRoutes = [];

  const loadRoutes = (baseRoute, routesPath) => {
    const files = fs.readdirSync(routesPath).sort();
    files.forEach((file) => {
      if (file.endsWith(".js")) {
        const routePath = path.join(routesPath, file);
        const route = require(routePath);

        if (typeof route === "function" || route instanceof express.Router) {
          const routeName = file.replace(".js", "");
          const fullPath = `/${baseRoute}/${routeName}`;
          app.use(fullPath, route);
          registeredRoutes.push(fullPath);
        } else {
          console.error(
            `Invalid route in file: ${file}. Expected a middleware function or Router.`
          );
        }
      }
    });
  };

  loadRoutes("api", authRoutes);
  loadRoutes("api", doctorRoutes);
  loadRoutes("api", appointmentRoutes);

  registeredRoutes.forEach((route) => console.log(route));
};
