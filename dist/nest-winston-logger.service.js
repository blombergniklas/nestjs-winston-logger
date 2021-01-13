"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestWinstonLoggerService = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
const nest_winston_logger_constants_1 = require("./nest-winston-logger.constants");
let NestWinstonLoggerService = class NestWinstonLoggerService extends common_1.Logger {
    constructor(config) {
        super();
        this.config = config;
        this.logger = winston_1.createLogger(this.config);
    }
    setContext(serviceName) {
        this.logger.defaultMeta = { service: serviceName };
    }
    log(message) {
        this.logger.info(message);
    }
    error(message, trace) {
        this.logger.error(message, trace);
    }
    warn(message) {
        this.logger.warn(message);
    }
    debug(message) {
        this.logger.debug(message);
    }
    verbose(message) {
        this.logger.verbose(message);
    }
};
NestWinstonLoggerService = __decorate([
    common_1.Injectable({ scope: common_1.Scope.TRANSIENT }),
    __param(0, common_1.Inject(nest_winston_logger_constants_1.NEST_WINSTON_CONFIG_OPTIONS)),
    __metadata("design:paramtypes", [Object])
], NestWinstonLoggerService);
exports.NestWinstonLoggerService = NestWinstonLoggerService;
//# sourceMappingURL=nest-winston-logger.service.js.map