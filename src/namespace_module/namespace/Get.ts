// HTTPのGETリクエストを行うためのモジュール

import { listenerCount } from "cluster";

namespace Network {
  export namespace HTTP {
    export function get<T>(url: string): Promise<T> {
      //
    }
  }
  export namespace TCP {
    listenerCount(port: number): Connection {
      //
    }
    //
  }
  export namespace UDP {
    //
  }
  export namespace IP {
    //
  }
}
