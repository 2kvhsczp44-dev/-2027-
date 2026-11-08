// ==========================================================================
// 札幌 クリスマスデートガイド スクリプト (script.js)
// ==========================================================================

// HTMLがすべて読み込まれたら実行
document.addEventListener("DOMContentLoaded", function () {

  // ====================================================
  // 1. 雪を降らせるアニメーション機能
  // ====================================================
  function initSnow() {
    // 雪の粒をまとめる親要素（div）を作成
    const snowContainer = document.createElement("div");
    snowContainer.className = "snow-container";
    document.body.appendChild(snowContainer);

    // 降らせる雪の文字バリエーション（結晶や丸など）
    const snowIcons = ["❄", "❅", "❆", "•", "✧"];
    const snowCount = 40; // 画面上に降らせる雪の個数

    for (let i = 0; i < snowCount; i++) {
      // 雪の要素を1つずつ作成
      const flake = document.createElement("div");
      flake.className = "snowflake";
      
      // ランダムに雪のアイコンを選ぶ
      const randomIcon = snowIcons[Math.floor(Math.random() * snowIcons.length)];
      flake.textContent = randomIcon;

      // ランダムな横位置（0vw 〜 100vw：画面の端から端まで）
      flake.style.left = Math.random() * 100 + "vw";

      // ランダムな大きさ（12px 〜 24px）
      flake.style.fontSize = (Math.random() * 12 + 12) + "px";

      // ランダムな透明度（0.4 〜 0.9：遠近感を出す）
      flake.style.opacity = Math.random() * 0.5 + 0.4;

      // 落ちるスピード（5秒 〜 12秒）
      const fallDuration = Math.random() * 7 + 5;
      flake.style.animationDuration = fallDuration + "s";

      // 落ち始めるタイミングをずらす（0秒 〜 8秒遅れ）
      // これにより、一斉に落ちるのではなくバラバラと自然に雪が降り続けます
      flake.style.animationDelay = (Math.random() * 8) + "s";

      // コンテナに追加
      snowContainer.appendChild(flake);
    }
  }

  // 雪を降らせる関数を実行
  initSnow();


  // ====================================================
  // 2. トップページ用：今日のおすすめデート診断
  // ====================================================
  const diagnosisBtn = document.getElementById("diagnosis-btn");
  const diagnosisResult = document.getElementById("diagnosis-result");

  if (diagnosisBtn && diagnosisResult) {
    // スポットのおすすめ提案リスト（リンク付き）
    const spotSuggestions = [
      {
        text: "✨【大通公園】本場ドイツのクリスマス市で温かいホットワインを飲みながら、幻想的な光のアーチを歩くのがおすすめ！",
        url: "spot-odori.html",
        title: "大通公園の詳細を見る"
      },
      {
        text: "🎄【サッポロファクトリー】光と音のジャンボツリーショー！温かい屋内レストランでゆったりディナーを楽しむのがおすすめ！",
        url: "spot-factory.html",
        title: "サッポロファクトリーの詳細を見る"
      },
      {
        text: "❄️【もいわ山山頂展望台】日本新三大夜景を一望！二人で『幸せの鐘』を鳴らして愛の南京錠をつけるロマンチックプランがおすすめ！",
        url: "spot-moiwayama.html",
        title: "もいわ山展望台の詳細を見る"
      }
    ];

    diagnosisBtn.addEventListener("click", function () {
      // 0〜2のランダムな数字を生成
      const randomIndex = Math.floor(Math.random() * spotSuggestions.length);
      const chosen = spotSuggestions[randomIndex];
      // 結果の文章と新しいタブで開くリンクを表示
      diagnosisResult.innerHTML = `
        ${chosen.text}<br>
        <a href="${chosen.url}" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-top: 10px; color: #a82323; font-weight: bold; text-decoration: underline;">
          👉 ${chosen.title}を新しいタブで開く &rarr;
        </a>
      `;
      diagnosisResult.style.display = "block";
    });
  }


  // ====================================================
  // 3. 下層ページ用：デート攻略ワンポイントアドバイス
  // ====================================================
  const tipBtn = document.getElementById("tip-btn");
  const tipResult = document.getElementById("tip-result");

  if (tipBtn && tipResult) {
    tipBtn.addEventListener("click", function () {
      // アドバイス文章を表示
      tipResult.style.display = "block";
      tipBtn.textContent = "🎄 アドバイスを確認しました！ 🎄";
      tipBtn.style.backgroundColor = "#1e7e34"; // モミの木グリーンに
      tipBtn.style.borderColor = "#ffffff";
      tipBtn.style.cursor = "default";
    });
  }

});
