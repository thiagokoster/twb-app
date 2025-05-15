let
	pkgs = import <nixpkgs> {};
in
	pkgs.mkShell {
		packages = [
			pkgs.nodejs
			pkgs.typescript-language-server
			pkgs.vscode-langservers-extracted
		];
	}

