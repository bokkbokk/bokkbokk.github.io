{ pkgs, ... }: {
  channel = "stable-23.11";
  packages = with pkgs; [
    nodejs_18
    nodePackages.http-server
  ];
  env = {
    PORT = "8080";
  };
  idx = {
    extensions = [
      # "vscodevim.vim"
    ];
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["http-server" "."];
          manager = "web";
          env = {
            PORT = "$PORT";
          };
        };
      };
    };
    workspace = {
      onCreate = {};
      onStart = {};
    };
  };
}
