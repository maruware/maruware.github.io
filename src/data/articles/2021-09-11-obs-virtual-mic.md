---
slug: '/blog/obs-virtual-mic'
date: '2021-09-11'
title: 'OBS + BlackHoleで仮想マイク的なことをする'
image: ''
---

WebRTCに関する開発をしているとどうしてもWebカメラを使った検証をすることになる。  
しかし、自分の顔を延々見るのは嫌だし、映像や音声についてなにか機能をテストするときにたとえば動いてみるとか適当にしゃべってみるとかするのも面倒だし、会社においても家においてもわけわからないことをしているのは恥ずかしい。  
なので、よく仮想カメラを使う。  

最近のOBSはデフォルトで仮想カメラがついているのでインストールして"Start virtual camera"をクリックするだけで使用できる。

![obs](/blog-images/obs.png)

ただ、仮想マイク機能はついていないので音声を流すことができない。
そこでBlackHoleというアプリを使う。

[BlackHole: Virtual Audio Driver](https://github.com/ExistentialAudio/BlackHole)

インストーラーはメアド登録が必要で面倒だが、brewでインストールするとうまく仮想デバイスが入らなかったのでインストーラーで入れた。

この仮想マイクにOBSから音声を入力するには、まずOBSの設定で音声モニターデバイスにBlackHoleを設定する。

![](/blog-images/obs-monitor-device.png)

次に、オーディオミキサーのAdvanced Audio Propertiesを開き

![](/blog-images/obs-audio-mixer.png)

対象のソースの設定をMonitor Onlyにする。

![](/blog-images/obs-advanced-audio-properties.png)

これでOBSからBlackHoleに音声が流れ、WebRTCを使ったサイトなどで音声デバイスにBlackHoleを選択すると動画ファイル等の音声が相手に届く。
