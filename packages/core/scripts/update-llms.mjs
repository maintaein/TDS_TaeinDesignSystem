/**
 * 발행 문서(llms.txt · llms-full.txt)의 생성 구간을 소스에서 다시 쓴다.
 *
 * 생성기가 `.css.ts` 토큰 모듈을 import해야 하므로 vanilla-extract 변환이
 * 필요하다. 변환기를 따로 들이는 대신 이미 플러그인이 설정된 vitest를
 * UPDATE_DOCS=1로 돌린다. 검사와 생성이 같은 코드 경로를 쓰므로 둘이
 * 어긋날 수 없다.
 *
 *   node scripts/update-llms.mjs
 */
import { spawnSync } from 'node:child_process';

const result = spawnSync(
  'npx',
  ['vitest', 'run', 'src/docs/llms.test.ts'],
  {
    stdio: 'inherit',
    // Windows에서 npx는 셸을 거쳐야 실행된다.
    shell: process.platform === 'win32',
    env: { ...process.env, UPDATE_DOCS: '1' },
  }
);

process.exit(result.status ?? 1);
