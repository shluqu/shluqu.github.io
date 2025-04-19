
#!/bin/bash

# ====== 配置用户名和密码 ======
PROXY_USER="uu56qrfk"
PROXY_PASS="dm9434zx"

# ====== 安装 Squid（HTTP代理） ======
function install_http() {
  yum install -y squid httpd-tools

  # 创建认证文件
  htpasswd -bc /etc/squid/passwd "$PROXY_USER" "$PROXY_PASS"

  # 覆盖 squid 配置文件
  cat <<EOF >/etc/squid/squid.conf
auth_param basic program /usr/lib64/squid/basic_ncsa_auth /etc/squid/passwd
auth_param basic realm proxy
acl authenticated proxy_auth REQUIRED

http_access allow authenticated
http_access deny all

http_port 1990
via off
forwarded_for delete

coredump_dir /var/spool/squid
EOF

  systemctl enable squid
  systemctl restart squid
  echo "[+] Squid HTTP Proxy installed on port 1990 with user authentication."
}

# ====== 安装 Dante（SOCKS5代理） ======
function install_socks5() {
  wget --no-check-certificate https://raw.githubusercontent.com/Lozy/danted/master/install.sh -O install_proxy.sh
  bash install_proxy.sh --port=1991 --user="$PROXY_USER" --passwd="$PROXY_PASS"
}

# ====== 执行两个安装函数 ======
install_http
install_socks5
