import type { AttributifyAttributes } from '@unocss/preset-attributify'

interface CnoCss {
  d: string
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<CnoCss> extends AttributifyAttributes { }
}