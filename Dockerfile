FROM a4sufpb/adonisjs:4.0.12

COPY . ./turistandopb

WORKDIR ./turistandopb

RUN npm install

CMD ["adonis", "migration:run"]

EXPOSE 3333

CMD ["npm", "start"]
