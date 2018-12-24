import { migrations } from "../migrations/index";

const migrate = async () => {
    await migrations.posts.up1();
};

migrate();
