# v1.2.1 (Fri Mar 24 2023)

:tada: This release contains work from a new contributor! :tada:

Thank you, Adam Wootton ([@ajwootto](https://github.com/ajwootto)), for all your work!

#### 🐛 Bug Fix

- Remove unmanaged decorator from generated output [#49](https://github.com/piotr-oles/as-proto/pull/49) ([@ajwootto](https://github.com/ajwootto))
- remove unmanaged decorator usage from generated definitions ([@ajwootto](https://github.com/ajwootto))

#### Authors: 1

- Adam Wootton ([@ajwootto](https://github.com/ajwootto))

---

# v1.2.0 (Tue Jan 10 2023)

#### 🚀 Enhancement

- feat: handle message extend [#46](https://github.com/piotr-oles/as-proto/pull/46) ([@piotr-oles](https://github.com/piotr-oles))
- feat: handle message extend ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v1.1.0 (Tue Jan 10 2023)

#### 🚀 Enhancement

- feat: handle protobuf dependencies [#45](https://github.com/piotr-oles/as-proto/pull/45) ([@piotr-oles](https://github.com/piotr-oles))
- feat: handle protobuf dependencies ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v1.0.0 (Tue Jan 10 2023)

#### 💥 Breaking Change

- Per-message/enum file output [#44](https://github.com/piotr-oles/as-proto/pull/44) ([@piotr-oles](https://github.com/piotr-oles))

#### 🚀 Enhancement

- feat: generate file for each message and enum ([@piotr-oles](https://github.com/piotr-oles))
- feat: remove nested message generation ([@piotr-oles](https://github.com/piotr-oles))
- feat: add parent descriptors to generator context ([@piotr-oles](https://github.com/piotr-oles))
- feat: add `filePath` property to `FileContext` ([@piotr-oles](https://github.com/piotr-oles))

#### 🐛 Bug Fix

- fix: prevent double-dot in `getFieldTypeName()` ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.9.2 (Thu Dec 08 2022)

#### 🐛 Bug Fix

- fix: improve safety when generating helper methods code [#41](https://github.com/piotr-oles/as-proto/pull/41) ([@piotr-oles](https://github.com/piotr-oles))
- fix: improve safety when generating field code [#40](https://github.com/piotr-oles/as-proto/pull/40) ([@piotr-oles](https://github.com/piotr-oles))
- refactor: generalise `getPathWithoutProto` to `getPathWithoutExtension` [#39](https://github.com/piotr-oles/as-proto/pull/39) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.9.1 (Sun Nov 27 2022)

#### 🐛 Bug Fix

- Improve file context by re-using scope context [#37](https://github.com/piotr-oles/as-proto/pull/37) ([@piotr-oles](https://github.com/piotr-oles))
- Add comments to `getFileContext()` function [#35](https://github.com/piotr-oles/as-proto/pull/35) ([@piotr-oles](https://github.com/piotr-oles))
- Add `freeName` to `registeredNames` on `registerName()` call [#35](https://github.com/piotr-oles/as-proto/pull/35) ([@piotr-oles](https://github.com/piotr-oles))
- Rename `getFreeName` to `registerName` in `ScopeContext` [#35](https://github.com/piotr-oles/as-proto/pull/35) ([@piotr-oles](https://github.com/piotr-oles))
- Rename `reservedNames` to `registeredNames` in `ScopeContext` [#35](https://github.com/piotr-oles/as-proto/pull/35) ([@piotr-oles](https://github.com/piotr-oles))
- Remove `getSafeName()` from `ScopeContext` [#34](https://github.com/piotr-oles/as-proto/pull/34) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.6.0 (Mon Nov 21 2022)

#### 🚀 Enhancement

- Support map fields [#28](https://github.com/piotr-oles/as-proto/pull/28) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.5.0 (Fri Oct 21 2022)

#### 🚀 Enhancement

- feat: upgrade assemblyscript to 0.20.x [#26](https://github.com/piotr-oles/as-proto/pull/26) ([@piotr-oles](https://github.com/piotr-oles))

#### 🐛 Bug Fix

- Migrate from as-pect to end-to-end tests [#25](https://github.com/piotr-oles/as-proto/pull/25) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.4.1 (Fri Oct 21 2022)

#### 🐛 Bug Fix

- fix: handle default values and multiple packed fields [#24](https://github.com/piotr-oles/as-proto/pull/24) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.4.0 (Sat Aug 13 2022)

#### 🚀 Enhancement

- Convert field names to camel case [#21](https://github.com/piotr-oles/as-proto/pull/21) ([@pienkowb](https://github.com/pienkowb))

#### Authors: 1

- Bartosz Pieńkowski ([@pienkowb](https://github.com/pienkowb))

---

# v0.3.0 (Thu Aug 11 2022)

#### 🚀 Enhancement

- Generate helper methods for encoding and decoding [#19](https://github.com/piotr-oles/as-proto/pull/19) ([@pienkowb](https://github.com/pienkowb))

#### Authors: 1

- Bartosz Pieńkowski ([@pienkowb](https://github.com/pienkowb))

---

# v0.2.7 (Wed Aug 10 2022)

#### 🐛 Bug Fix

- fix: use dynamic link to resolve package.json and output flat lib directory [#20](https://github.com/piotr-oles/as-proto/pull/20) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.2.6 (Wed Aug 10 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Bartosz Pieńkowski ([@pienkowb](https://github.com/pienkowb)), for all your work!

#### 🐛 Bug Fix

- Add a file header comment [#18](https://github.com/piotr-oles/as-proto/pull/18) ([@pienkowb](https://github.com/pienkowb))
- chore: reformat tests [#14](https://github.com/piotr-oles/as-proto/pull/14) ([@piotr-oles](https://github.com/piotr-oles))
- tests: add tests for scope-context.ts [#14](https://github.com/piotr-oles/as-proto/pull/14) ([@piotr-oles](https://github.com/piotr-oles))
- tests: improve descriptions in existing tests [#14](https://github.com/piotr-oles/as-proto/pull/14) ([@piotr-oles](https://github.com/piotr-oles))
- tests: add tests for reserved-keyword.ts [#14](https://github.com/piotr-oles/as-proto/pull/14) ([@piotr-oles](https://github.com/piotr-oles))
- tests: add tests for names.ts [#14](https://github.com/piotr-oles/as-proto/pull/14) ([@piotr-oles](https://github.com/piotr-oles))
- chore: setup test environment in as-proto-gen [#14](https://github.com/piotr-oles/as-proto/pull/14) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 2

- Bartosz Pieńkowski ([@pienkowb](https://github.com/pienkowb))
- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.2.5 (Sun Jun 26 2022)

#### 🐛 Bug Fix

- fix: improve reliability for big .proto files [#13](https://github.com/piotr-oles/as-proto/pull/13) ([@piotr-oles](https://github.com/piotr-oles))
- chore: fix build script in as-proto-gen [#12](https://github.com/piotr-oles/as-proto/pull/12) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.2.3 (Fri Apr 22 2022)

#### 🐛 Bug Fix

- fix: follow proto3 specification for default values [#8](https://github.com/piotr-oles/as-proto/pull/8) ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))

---

# v0.2.2 (Mon Mar 21 2022)

#### 🐛 Bug Fix

- fix repeated message - add missing fork and ldelim calls [#6](https://github.com/piotr-oles/as-proto/pull/6) ([@roaminroe](https://github.com/roaminroe))

#### Authors: 1

- [@roaminroe](https://github.com/roaminroe)

---

# v0.2.1 (Sat Mar 19 2022)

#### 🐛 Bug Fix

- fix packed vs non-packed repeated fields [#5](https://github.com/piotr-oles/as-proto/pull/5) ([@roaminroe](https://github.com/roaminroe))

#### Authors: 1

- [@roaminroe](https://github.com/roaminroe)

---

# v0.1.0 (Fri Jan 07 2022)

:tada: This release contains work from a new contributor! :tada:

Thank you, Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles)), for all your work!

#### 🚀 Enhancement

- fix: make release on main branch working [#2](https://github.com/piotr-oles/as-proto/pull/2) ([@piotr-oles](https://github.com/piotr-oles))
- feat: setup ci [#1](https://github.com/piotr-oles/as-proto/pull/1) ([@piotr-oles](https://github.com/piotr-oles))
- feat: setup ci ([@piotr-oles](https://github.com/piotr-oles))

#### ⚠️ Pushed to `main`

- initialize the repo ([@piotr-oles](https://github.com/piotr-oles))

#### Authors: 1

- Piotr Oleś ([@piotr-oles](https://github.com/piotr-oles))
