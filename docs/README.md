# 職務経歴書

## Accounts

<p>
<a href="https://github.com/git-shochann" target="_blank"><img alt="Github" src="https://img.shields.io/badge/git_shochann-%2312100E.svg?&style=flat-square&logo=Github&logoColor=white" /></a>
<a href="https://x.com/00sht_" target="_blank"><img alt="x" src="https://img.shields.io/badge/@00sht_-%231DA1F2.svg?&style=flat-square&logo=x&logoColor=white" /></a>
<a href="https://zenn.dev/shochann00" target="_blank"><img alt="Zenn" src="https://img.shields.io/badge/shochann00-3EA8FF.svg?&style=flat-square&logo=Zenn&logoColor=white" /></a>
</p>

## Skills

### Programming Languages and Frameworks

Go | Echo | Ruby | Ruby on Rails

### Database

MySQL

### Cloud Service

AWS

### Others

Docker | GitHub Actions

### Qualification

AWS Certified Solutions Architect – Associate

## 職務経歴詳細

### 株式会社 栄光（2023/04/01〜）

- **プロジェクト規模**

  - 役職: Backend Engineer
  - 機能単位でのチームでの開発（5人〜）

- **主な業務と成果**

  - Go, MySQL, AWS
  - API開発、技術検証

- **詳細な業務内容**

  教育塾向けの主に生徒、保護者、先生が使用する教室管理システムの開発

  - モノリス、コンテナでの開発
  - 使用技術：Go、Echo、MySQL、Gorm v2
  - アーキテクチャパターン：クリーンアーキテクチャでAPI毎に分けて開発
  - API仕様のドキュメント化：Swaggerを使用
  - 開発環境の整備：devcontainer化し、開発者が同じVSCodeの環境で開発できるように設定
  - 各種便利コマンドの準備：`.vscode/task.json`で用意、Makefileの作成
  - ドキュメント整備：Backlogを使用
  - CIの導入：Dockerfileを各環境に用意し、GitHub Actionsでビルド、Linter、Formatter、テストの自動化を行い、高速で継続的インテグレーションを実施できるように整備
  - DBマイグレーションの実施：DDLからGorm v2を使用したマイグレーションへの移行
  - AWS関連の業務
    - AWS EventBridgeからAWS Batchの技術検証、インフラ周りの共有、質問対応
    - AWS SQSを使用してキューイングし、疎結合化を実現
  - メール配信サービス：SendGridを使用して技術検証

- **大変だったこと**

  仕様書があったものの、ビジネス的視点に立って仕様を把握するのが大変だった。主に仕様の担当をしている上司とコミュニケーションをとりながら作業を進めたが、チーム内で同じような質問が出たり、コミュニケーションコストが発生した。
  
  上記を改善するために例えばマイクロサービス化し、ドメイン毎にチームを分ければ、コミュニケーションコストも減り、小さな機能に分割してアジャイルで開発する方が良いと感じた。

### 業務委託（2022/04〜2022/12）

- **Proxy サーバー自動作成 CLI**

  - 担当：要件定義、設計、実装
  - 使用技術：Go, cobra, NHN Cloud API
  - CLIベースでNHNCloudのインスタンスの構築、全件取得、グローバルIPのアタッチ、デタッチ機能を提供し、SSH接続を通じてSquidを用いたProxyサーバーの自動生成を行うプログラムを作成

- **物流倉庫通知プログラム**

  - 担当：要件定義、設計、実装
  - 使用技術：Go, discordgo, 物流倉庫 API
  - 海外向け輸出ビジネスにおいて、契約物流倉庫の在庫状況をDiscordに通知するDiscordBotを作成。短期間で要件定義、設計、コーディングを一人で担当し納品

### 株式会社 VoiceUtopia（2021/01〜2022/04）

ユーザーと声優の1:1通話サービスのWebアプリケーションをサービス立ち上げから設計、開発、運用まで行いました。初めての技術も主体的に習得し、限られた時間の中でユーザーが求める機能を優先的に開発しました。上流工程から関わり、DB設計、API設計、開発、Swaggerを用いたスキーマファーストの開発を行い、フロントエンドと並行して開発スピードを上げることができました。インフラ設計、デプロイまで担当しリリースを成功させました。

- **プロジェクト規模：**

  - 役割: バックエンドエンジニア
  - 4人チームでの開発 (フロントエンド1名, バックエンド2名, モバイル1名)

- **主な業務と成果：**

  - Ruby on Rails、TypeScript Express、MySQLを使用したAPI開発・設計
  - DB設計・構築
  - Swaggerを用いたAPI設計
  - ユーザー機能の実装（新規登録、メールアドレス認証、ログイン機能、マイページ情報編集、予約機能、必要なAPIの作成）
  - 声優機能の実装（新規応募、登録、ログイン機能、アカウント発行、メール配信、マイページ情報編集、予約作成、既存声優データのDB移行）
  - 各環境毎のAPIサーバーの用意とリリース段階までの確認
  - 管理者機能の実装（Slack通知、Web上での声優採用・不採用処理、メール配信）
  - AWS EC2を使用したAPIサーバー、AWS RDSを使用したDBのインフラ設計・構築

### Apple Japan 合同会社(2018/09〜2021/11)

大学在学中に入社し、主に修理サポートを担当、法人営業も行いました。
基本的に業務に求められる時間や水準が高く、時間内にいかに効率良く業務を達成出来るか常に試行錯誤してました。
また新人教育も行い、実際に業務で活かせるようにすることを担当していました。日頃からマネージャーと積極的に 1on1 をし、日々のオペレーションについて話し合うことを行い、自身のカスタマーからの評価を常に平均以上の水準を保っていました。
ダイバーシティ&インクルージョンという多様な人材を受け入れ、その能力を発揮させるという考え方が根底にあり、
多国籍で多種多様で、個人を尊重するという文化の中で学ぶことができ、チームで達成するということが自分にとって非常にやりがい


## 業務外活動

### 技術記事投稿

- **Zenn**
  - [https://zenn.dev/shochann00](https://zenn.dev/shochann00)


### 意欲、興味、自己学習

- アーキテクチャ設計や開発ツールの導入、ドキュメントの整備など他のメンバーがすぐに理解・デバッグしやすく、保守運用、将来の修正が少ない設計を考えることが重要だと考えています。

今後挑戦したいジャンル

- マイクロサービス
- 大規模システムの開発
- IaCでのクラウド管理

## 自己PR、希望条件

チームと協力して良い雰囲気の中、コミュニケーションが取れるチーム環境であると、自身の力が最大限に活かせると思っています。
また新しい技術を使って新しいことに挑戦する、主体的に情報を取得しにいくということが得意であるので、新しい挑戦が積極的に出来る環境であると嬉しいです。