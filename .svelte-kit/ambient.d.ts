
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const GJS_DEBUG_TOPICS: string;
	export const LESSOPEN: string;
	export const LIBRARY_PATH: string;
	export const C_INCLUDE_PATH: string;
	export const USER: string;
	export const CLAUDE_CODE_ENTRYPOINT: string;
	export const npm_config_user_agent: string;
	export const FONTCONFIG_PATH: string;
	export const GIT_EDITOR: string;
	export const GIO_MODULE_DIR: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
	export const npm_node_execpath: string;
	export const GDK_BACKEND_VSCODE_SNAP_ORIG: string;
	export const DISABLE_INSTALLATION_CHECKS: string;
	export const CLUTTER_DISABLE_MIPMAPPED_TEXT: string;
	export const SHLVL: string;
	export const LD_LIBRARY_PATH: string;
	export const npm_config_noproxy: string;
	export const __ETC_PROFILE_NIX_SOURCED: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const CONDA_SHLVL: string;
	export const LOCPATH_VSCODE_SNAP_ORIG: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const wasp: string;
	export const GTK_PATH: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const XDG_DATA_HOME_VSCODE_SNAP_ORIG: string;
	export const GTK_IM_MODULE_FILE: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const NIX_PROFILES: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MANAGERPID: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const SYSTEMD_EXEC_PID: string;
	export const VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const _CE_M: string;
	export const USE_BUILTIN_RIPGREP: string;
	export const _CONDA_ROOT: string;
	export const LIBVIRT_DEFAULT_URI: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const CPLUS_INCLUDE_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const LOGNAME: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const USERNAME: string;
	export const TERM: string;
	export const OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const _CE_CONDA: string;
	export const FC_FONTATIONS: string;
	export const WINDOWPATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const GTK_EXE_PREFIX: string;
	export const INVOCATION_ID: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const COREPACK_ENABLE_AUTO_PIN: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const LOCPATH: string;
	export const NoDefaultCurrentDirectoryInExePath: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
	export const XDG_DATA_HOME: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const CONDA_PYTHON_EXE: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const LESSCLOSE: string;
	export const GTK_PATH_VSCODE_SNAP_ORIG: string;
	export const FONTCONFIG_FILE: string;
	export const CLAUDECODE: string;
	export const NIX_SSL_CERT_FILE: string;
	export const GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
	export const GPG_AGENT_INFO: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const _CONDA_EXE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const QT_IM_MODULE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const DISABLE_AUTOUPDATER: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const CONDA_EXE: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const OLLAMA_ORIGINS: string;
	export const npm_command: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		GJS_DEBUG_TOPICS: string;
		LESSOPEN: string;
		LIBRARY_PATH: string;
		C_INCLUDE_PATH: string;
		USER: string;
		CLAUDE_CODE_ENTRYPOINT: string;
		npm_config_user_agent: string;
		FONTCONFIG_PATH: string;
		GIT_EDITOR: string;
		GIO_MODULE_DIR: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
		npm_node_execpath: string;
		GDK_BACKEND_VSCODE_SNAP_ORIG: string;
		DISABLE_INSTALLATION_CHECKS: string;
		CLUTTER_DISABLE_MIPMAPPED_TEXT: string;
		SHLVL: string;
		LD_LIBRARY_PATH: string;
		npm_config_noproxy: string;
		__ETC_PROFILE_NIX_SOURCED: string;
		HOME: string;
		CHROME_DESKTOP: string;
		CONDA_SHLVL: string;
		LOCPATH_VSCODE_SNAP_ORIG: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		wasp: string;
		GTK_PATH: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		XDG_DATA_HOME_VSCODE_SNAP_ORIG: string;
		GTK_IM_MODULE_FILE: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		NIX_PROFILES: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MANAGERPID: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		SYSTEMD_EXEC_PID: string;
		VSCODE_PYTHON_AUTOACTIVATE_GUARD: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		_CE_M: string;
		USE_BUILTIN_RIPGREP: string;
		_CONDA_ROOT: string;
		LIBVIRT_DEFAULT_URI: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		COLOR: string;
		NVM_DIR: string;
		CPLUS_INCLUDE_PATH: string;
		DEBUGINFOD_URLS: string;
		LOGNAME: string;
		JOURNAL_STREAM: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_CLASS: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		USERNAME: string;
		TERM: string;
		OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		_CE_CONDA: string;
		FC_FONTATIONS: string;
		WINDOWPATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		GTK_EXE_PREFIX: string;
		INVOCATION_ID: string;
		NODE: string;
		npm_package_name: string;
		COREPACK_ENABLE_AUTO_PIN: string;
		XDG_MENU_PREFIX: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		LOCPATH: string;
		NoDefaultCurrentDirectoryInExePath: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
		XDG_DATA_HOME: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		GSETTINGS_SCHEMA_DIR: string;
		CONDA_PYTHON_EXE: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		LESSCLOSE: string;
		GTK_PATH_VSCODE_SNAP_ORIG: string;
		FONTCONFIG_FILE: string;
		CLAUDECODE: string;
		NIX_SSL_CERT_FILE: string;
		GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
		GPG_AGENT_INFO: string;
		GJS_DEBUG_OUTPUT: string;
		_CONDA_EXE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		QT_IM_MODULE: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		DISABLE_AUTOUPDATER: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		CONDA_EXE: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		OLLAMA_ORIGINS: string;
		npm_command: string;
		MEMORY_PRESSURE_WRITE: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
