"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coin98WalletAdapter = exports.Coin98WalletName = void 0;
const wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
const web3_js_1 = require("@solana/web3.js");
const bs58_1 = __importDefault(require("bs58"));
exports.Coin98WalletName = 'Coin98';
class Coin98WalletAdapter extends wallet_adapter_base_1.BaseMessageSignerWalletAdapter {
    constructor(config = {}) {
        super();
        this.name = exports.Coin98WalletName;
        this.url = 'https://coin98.com';
        this.icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3NiA3NSI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMDEuNjgxJSIgeDI9Ii0xLjU1NyUiIHkxPSIxNS4yNjglIiB5Mj0iODQuOTE3JSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGMUQ5NjEiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQ0RBMTQ2Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHJlY3Qgd2lkdGg9Ijc1IiBoZWlnaHQ9Ijc1IiBmaWxsPSIjMDAwIiByeD0iMTYiLz4KICAgIDxwYXRoIGZpbGw9InVybCgjYSkiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTYxLjQ0IDBhMTMuNzE0IDEzLjcxNCAwIDAgMSA5LjY4IDQuMDEgMTMuNjYxIDEzLjY2MSAwIDAgMSA0LjAwOCA5LjY2OHY0Ny42NDZhMTMuNjYgMTMuNjYgMCAwIDEtNC4wMDcgOS42NjZBMTMuNzEzIDEzLjcxMyAwIDAgMSA2MS40NCA3NUgxMy42ODZhMTMuNzEzIDEzLjcxMyAwIDAgMS05LjY4LTQuMDFBMTMuNjYgMTMuNjYgMCAwIDEgMCA2MS4zMjRWMTMuNjc4YzAtMy42MjUgMS40NC03LjEwMiA0LjAwNy05LjY2N0ExMy43MTQgMTMuNzE0IDAgMCAxIDEzLjY4NyAwWk0yMC4wNjMgNDYuMjMxaC00LjgyNWExMC4wMzIgMTAuMDMyIDAgMCAwIDIuOTQ2IDcuMDg2IDEwLjA3IDEwLjA3IDAgMCAwIDcuMSAyLjk0MiAxMC4wNjUgMTAuMDY1IDAgMCAwIDcuMTA4LTIuOTM1IDEwLjAzIDEwLjAzIDAgMCAwIDIuOTQ2LTcuMDkzaC00LjgyNGE1LjIwNyA1LjIwNyAwIDAgMS0xLjUzIDMuNjg4IDUuMjI1IDUuMjI1IDAgMCAxLTMuNjk2IDEuNTI4IDUuMjM0IDUuMjM0IDAgMCAxLTMuNjk1LTEuNTI4IDUuMjEzIDUuMjEzIDAgMCAxLTEuNTMtMy42ODhaTTU0LjMzIDMzLjcxNmExMS43NjMgMTEuNzYzIDAgMCAwLTEyLjc5OSAyLjUzOEExMS42OTcgMTEuNjk3IDAgMCAwIDM4Ljk5IDQ5LjAzYTExLjcyMyAxMS43MjMgMCAwIDAgNC4zMjggNS4yNTkgMTEuNzU3IDExLjc1NyAwIDAgMCA2LjUyNiAxLjk3IDExLjc2NiAxMS43NjYgMCAwIDAgOC4yOS0zLjQzNSAxMS43MiAxMS43MiAwIDAgMCAzLjQ0Mi04LjI3NCAxMS43MDIgMTEuNzAyIDAgMCAwLTEuOTc1LTYuNTE0IDExLjczNiAxMS43MzYgMCAwIDAtNS4yNjktNC4zMlptLTQuNDg4IDMuOTJhNi45MzcgNi45MzcgMCAwIDEgNC45IDIuMDI1IDYuOTEgNi45MSAwIDAgMSAyLjAyOCA0Ljg5MiA2Ljg5NyA2Ljg5NyAwIDAgMS0xLjE3IDMuODM0IDYuOTMyIDYuOTMyIDAgMCAxLTEwLjY0MyAxLjA0MiA2LjkwMiA2LjkwMiAwIDAgMS0xLjUtNy41MjIgNi45MDkgNi45MDkgMCAwIDEgMi41NDQtMy4xIDYuOTI4IDYuOTI4IDAgMCAxIDMuODQxLTEuMTY3Wm0uMTcgNC41NTJhMi40MzEgMi40MzEgMCAwIDAtMi4yNDEgMS4xNTQgMi40MTggMi40MTggMCAwIDAtLjM1NiAxLjI1NyAyLjM5NSAyLjM5NSAwIDAgMCAxLjYxOSAyLjI5djEuNzUzaDEuNjE4di0xLjc1NGEyLjQyNyAyLjQyNyAwIDAgMCAxLjU5NC0xLjk1IDIuNDE4IDIuNDE4IDAgMCAwLTEtMi4zMSAyLjQzMSAyLjQzMSAwIDAgMC0xLjIzNC0uNDRabS0yMC4yMi0yMi41NTJhMTEuNzYyIDExLjc2MiAwIDAgMC0xMi43OTYgMi41MzEgMTEuNjk3IDExLjY5NyAwIDAgMC0yLjU1NCAxMi43NjkgMTEuNzIzIDExLjcyMyAwIDAgMCA0LjMyIDUuMjYyIDExLjc1NyAxMS43NTcgMCAwIDAgMTQuODI1LTEuNDQ2IDExLjcxNyAxMS43MTcgMCAwIDAgMy40NDUtOC4yODQgMTEuNzAzIDExLjcwMyAwIDAgMC0xLjk3NC02LjUxMiAxMS43MzYgMTEuNzM2IDAgMCAwLTUuMjY2LTQuMzJabS00LjUxIDMuOTE3YTYuOTQ1IDYuOTQ1IDAgMCAxIDQuODk3IDIuMDI5IDYuOTE4IDYuOTE4IDAgMCAxIDIuMDMyIDQuODg2IDYuOTA2IDYuOTA2IDAgMCAxLTEuMTY4IDMuODQyIDYuOTQgNi45NCAwIDAgMS0xMC42NiAxLjA0OCA2LjkxMSA2LjkxMSAwIDAgMS0xLjUtNy41MzYgNi45MTggNi45MTggMCAwIDEgMi41NS0zLjEwMyA2LjkzNyA2LjkzNyAwIDAgMSAzLjg1LTEuMTY2Wm0yNC41Ni00LjgxYTEwLjA1OSAxMC4wNTkgMCAwIDAtNy4xMDMgMi45NCAxMC4wMiAxMC4wMiAwIDAgMC0yLjk0IDcuMDkgOS45IDkuOSAwIDAgMCAxLjIzIDQuNzk1IDEzLjU3NSAxMy41NzUgMCAwIDEgNC4yMTQtMi4zMjIgNS4wODIgNS4wODIgMCAwIDEtLjYyNS0yLjQ3NyA1LjIwNiA1LjIwNiAwIDAgMSAxLjUwMy0zLjczNiA1LjIyMyA1LjIyMyAwIDAgMSAzLjcyMi0xLjU1NCA1LjIzNCA1LjIzNCAwIDAgMSAzLjcyIDEuNTU0IDUuMjEzIDUuMjEzIDAgMCAxIDEuNTA1IDMuNzM2IDUuMjc5IDUuMjc5IDAgMCAxLS42MjMgMi40NzMgMTMuNTc0IDEzLjU3NCAwIDAgMSA0LjIxMyAyLjMyMiA5LjkwMyA5LjkwMyAwIDAgMCAxLjIzLTQuNzk1IDEwLjAzMiAxMC4wMzIgMCAwIDAtMi45NDYtNy4wODYgMTAuMDcgMTAuMDcgMCAwIDAtNy4xLTIuOTRabS0yMy43NSA3Ljk5aC0xLjYxN3YxLjc1YTIuNDE5IDIuNDE5IDAgMCAwLTEuNTgyIDIuNjg3IDIuNDE0IDIuNDE0IDAgMCAwIDIuMzkgMi4wMDYgMi40NSAyLjQ1IDAgMCAwIDEuNTU1LS41NzQgMi40MTQgMi40MTQgMCAwIDAtLjc0Ni00LjExOXYtMS43NVoiLz4KICA8L2c+Cjwvc3ZnPgo=';
        this.supportedTransactionVersions = new Set(['legacy', 0]);
        this._readyState = typeof window === 'undefined' || typeof document === 'undefined'
            ? wallet_adapter_base_1.WalletReadyState.Unsupported
            : wallet_adapter_base_1.WalletReadyState.NotDetected;
        this._connecting = false;
        this._wallet = null;
        this._publicKey = null;
        if (this._readyState !== wallet_adapter_base_1.WalletReadyState.Unsupported) {
            (0, wallet_adapter_base_1.scopePollingDetectionStrategy)(() => {
                var _a;
                if ((_a = window.coin98) === null || _a === void 0 ? void 0 : _a.sol) {
                    this._readyState = wallet_adapter_base_1.WalletReadyState.Installed;
                    this.emit('readyStateChange', this._readyState);
                    return true;
                }
                return false;
            });
        }
    }
    get publicKey() {
        return this._publicKey;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        var _a;
        return !!((_a = this._wallet) === null || _a === void 0 ? void 0 : _a.isConnected());
    }
    get readyState() {
        return this._readyState;
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.connected || this.connecting)
                    return;
                if (this._readyState !== wallet_adapter_base_1.WalletReadyState.Installed)
                    throw new wallet_adapter_base_1.WalletNotReadyError();
                this._connecting = true;
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const wallet = window.coin98.sol;
                let account;
                try {
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    account = (yield wallet.connect())[0];
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletAccountError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                let publicKey;
                try {
                    publicKey = new web3_js_1.PublicKey(account);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletPublicKeyError(error === null || error === void 0 ? void 0 : error.message, error);
                }
                this._wallet = wallet;
                this._publicKey = publicKey;
                this.emit('connect', publicKey);
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
            finally {
                this._connecting = false;
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            const wallet = this._wallet;
            if (wallet) {
                this._wallet = null;
                this._publicKey = null;
                try {
                    yield wallet.disconnect();
                }
                catch (error) {
                    this.emit('error', new wallet_adapter_base_1.WalletDisconnectionError(error === null || error === void 0 ? void 0 : error.message, error));
                }
            }
            this.emit('disconnect');
        });
    }
    signTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const response = yield wallet.request({ method: 'sol_sign', params: [transaction] });
                    //VersionedTransaction
                    if (response.transaction) {
                        const rawSerializedTransaction = bs58_1.default.decode(response.transaction);
                        return web3_js_1.VersionedTransaction.deserialize(rawSerializedTransaction);
                    }
                    const publicKey = new web3_js_1.PublicKey(response.publicKey);
                    const signature = bs58_1.default.decode(response.signature);
                    transaction.addSignature(publicKey, signature);
                    return transaction;
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signAllTransactions(transactions) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const response = yield wallet.request({ method: 'sol_signAllTransactions', params: [transactions] });
                    //VersionedTransaction
                    if (response.transactions) {
                        return response.transactions.map((rawData) => {
                            const rawSerializedTransaction = bs58_1.default.decode(rawData);
                            return web3_js_1.VersionedTransaction.deserialize(rawSerializedTransaction);
                        });
                    }
                    const publicKey = new web3_js_1.PublicKey(response.publicKey);
                    const signatures = response.signatures;
                    return transactions.map((transaction, index) => {
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        const signature = bs58_1.default.decode(signatures[index]);
                        transaction.addSignature(publicKey, signature);
                        return transaction;
                    });
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignTransactionError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
    signMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const wallet = this._wallet;
                if (!wallet)
                    throw new wallet_adapter_base_1.WalletNotConnectedError();
                try {
                    const response = yield wallet.request({ method: 'sol_signMessage', params: [message] });
                    return bs58_1.default.decode(response.signature);
                }
                catch (error) {
                    throw new wallet_adapter_base_1.WalletSignMessageError(error === null || error === void 0 ? void 0 : error.message, error);
                }
            }
            catch (error) {
                this.emit('error', error);
                throw error;
            }
        });
    }
}
exports.Coin98WalletAdapter = Coin98WalletAdapter;
//# sourceMappingURL=adapter.js.map