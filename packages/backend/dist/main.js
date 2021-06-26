"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const fastify_compress_1 = require("fastify-compress");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({
        logger: {
            level: 'info',
            prettyPrint: true,
        },
        ignoreTrailingSlash: true,
        caseSensitive: false,
    }), {
        logger: ['error', 'warn'],
    });
    app.register(fastify_compress_1.default, { encodings: ['gzip', 'deflate'] });
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map