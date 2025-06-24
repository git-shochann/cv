# 職務経歴書

## 基本情報

- 坪谷翔（Tsuboya Sho）
- 1997/08/25
- 東京都在住

## スキル

### プログラミング言語等

- Go | Ruby | JavaScript

### フレームワーク / ランタイム

- Echo | Ruby on Rails | Node.js

### データベース

- MySQL

### クラウド / インフラ・監視等

- AWS (ECS, EC2, RDS, CloudFront, S3, ECR, SQS, EventBridge, Batch, CDK, Lambda, VPC) | Docker | Datadog

### CI/CD

- GitHub Actions

### 負荷テスト

- Taurus | K6

### 資格

- AWS Certified Solutions Architect – Associate

## 職務経歴詳細

---

### 業務委託

- WIXを使用したWeb・ECサイトの作成案件
- AIShipRentalを使用したECサイトの作成案件
  - フロントエンド実装

---

### 教育系企業（大手学習塾を展開するグループ会社）: 2024/4〜

#### 役職

- バックエンドエンジニア（DevOpsの役割を含む）
- 機能単位でのチーム開発（5人〜）

### 主な業務と成果

#### 技術スタック

- **バックエンド:** Go, Echo, MySQL, Gorm V2
- **ソフトウェアアーキテクチャ:** Clean Architecture
- **インフラ:** AWS (ECS, RDS(Amazon Aurora), S3, CloudFront, SQS, EventBridge, Batch, CDK, ECR, Route53, VPC, IAM, Lambda)
- **CI/CD:** GitHub Actions
- **監視・ログ:** Datadog
- **リアルタイム通信:** Socket.IO (Node.js)
- **負荷テスト:** k6
- **その他:** Swagger (APIドキュメント), SendGrid (メール配信), JIRA（タスク管理）, Backlog + Confluence (ドキュメント管理), アジャイル開発

#### 詳細な業務内容

##### 1. 教室管理システムの開発

- クリーンアーキテクチャを採用し、API単位で開発
- Swaggerを用いてAPIドキュメントを整備
- DDLベースの管理からGorm V2によるマイグレーションファイルでの管理へ移行
- Goの標準パッケージ（testing）を活用し、ユニットテストを実装 CI上で自動テストが実行されるようGitHub Actionsに組み込み、開発品質を維持
- APIのログ設計、Datadogの連携の整備
  - Echo, Gormも含めてログ出力をslogに統一し、Datadog APM, RUMとも接続を実施し、トレース出来るように設定

##### 2. 開発環境の整備

- devcontainer を導入し、チームで統一されたVSCode環境を作成
- .vscode/task.json や Makefile を活用し、開発フローの向上
- GitHub Actions を用いて Docker ビルド、Linter、Formatter、テストの自動化を実施

##### 3. インフラ・AWS関連業務

- AWS CDKを活用し、インフラの構築を自動化（実装中）
- AWS EventBridge & Batchを利用したバッチ処理の技術検証・設計・実装
- AWS SQSを活用し、システムの疎結合化を実現
- Socket.IOサーバーのためにECSやネットワークの設定を最適化
- 可用性・パフォーマンスを向上のために、DBのマスター・スレーブの二台構成を導入し伴うソースの変更、インフラの変更を実施

##### 4. 監視・運用・改善

- Datadog（APM, DBM）を導入し、アプリケーションのパフォーマンス監視・ログ収集を実施
- 負荷テストにおいて、Taurus, K6を用いてシステムの耐久テストを実施し、インスタンススペックの調整やコネクションプールを適切な値を決定することを実施
- Datadogの監視結果をもとにスロークエリ・処理遅延を特定し、SQLの最適化およびミドルウェアの不要な処理を削除。パフォーマンスを約1/3まで短縮することに成功

##### 5. その他の業務

- **リアルタイム通信:** Goで実装していたSocket.IOをNode.jsに置き換え、それに伴いAWSの変更を実施
- **メール配信:** SendGrid を使用したメール送信の技術検証・実装
- **ドキュメント管理:** Backlog, Confluence を用いて仕様・技術的ナレッジを整理

---

### 業務委託（2022/04〜2022/12）

- **Proxy サーバー自動作成 CLI**

  - 担当: 要件定義、設計、実装
  - 使用技術: Go, cobra, NHN Cloud API
  - CLIベースでNHNCloudのインスタンスの構築、全件取得、グローバルIPのアタッチ・デタッチ機能を提供し、SSH接続を通じてSquidを用いたProxyサーバーの自動生成プログラムを作成

- **物流倉庫通知プログラム**

  - 担当: 要件定義、設計、実装
  - 使用技術: Go, discordgo, 物流倉庫 API
  - 海外向け輸出ビジネスにおいて、契約物流倉庫の在庫状況をDiscordに通知するDiscordBotを開発。短期間で要件定義、設計、コーディングを一人で担当し納品

---

### 株式会社 VoiceUtopia: 2021/01〜

ユーザーと声優の1:1通話サービスのWebアプリケーションの立ち上げから設計、開発、運用
新しい技術も主体的に習得し、限られた時間の中でユーザーの求める機能を優先的に開発
DB設計、API設計、Swaggerを用いたスキーマファーストの開発を行い、フロントエンドと並行して開発スピードを向上
インフラ設計・デプロイまで担当し、リリースを成功させた

- **プロジェクト規模:**
  - 役割: バックエンドエンジニア
  - 4人チームでの開発（フロントエンド1名, バックエンド2名, モバイル1名）

- **主な業務と成果:**
  - Ruby on Rails、Node.js、TypeScript Express、MySQLを使用したAPI開発・設計
  - DB設計・構築
  - Swaggerを用いたAPI設計
  - ユーザー機能の実装（新規登録、メール認証、ログイン、マイページ情報編集、予約機能、必要なAPI作成）
  - 声優機能の実装（新規応募、登録、ログイン、アカウント発行、メール配信、マイページ情報編集、予約作成、DB移行）
  - 各環境ごとのAPIサーバーの構築およびリリース段階での確認
  - 管理者機能の実装（Slack通知、Web上での声優採用・不採用処理、メール配信）
  - AWS EC2を使用したAPIサーバー、AWS RDSを使用したDBのインフラ設計・構築

---

### Apple Japan合同会社（2018/09〜2021/11）

大学在学中に入社し、主に修理サポート業務・法人営業・新人教育を担当しました。
Appleでは、短時間で高い品質の成果が求められる環境で、効率性と正確さの両立を意識した業務改善を日々行っていました。

また、新人教育を任され、現場で即戦力となれるよう実務ベースでのOJTを担当して、マネージャーとの1on1を通じ、日々のオペレーションを振り返り、カスタマー評価でも常に平均以上の水準を維持しました。

Appleの根幹にある「Diversity & Inclusion」の文化の中で、国籍・バックグラウンドの異なる同僚と協力し、個を尊重したチームワークを学びました。
この経験は、エンジニアリングの現場でも活かせる対人スキル・チーム志向の原点となっています。

## 各種アカウント

[![Github](https://img.shields.io/badge/git_shochann-%2312100E.svg?&style=flat-square&logo=Github&logoColor=white)](https://github.com/git-shochann) ※ 現在の実務では、別アカウントのGitHub Organization上で開発しております。
[![Zenn](https://img.shields.io/badge/shochann00-3EA8FF.svg?&style=flat-square&logo=Zenn&logoColor=white)](https://zenn.dev/shochann00)

## 自己PR

バックエンド開発、クラウド環境構築、DevOps業務に強みがあります。  
GoとAWSを活用したAPI開発やインフラ構築、開発環境の整備、自動化、負荷テスト・監視システムの導入などを通じて、安定したシステム運用を実現してきました。
チームでの協力を重視し、円滑なコミュニケーションを大切にしています。  
特に、効率的な運用とスケーラビリティを意識した設計・構築を心がけ、将来を見据えた拡張性の高いシステムの設計・構築を強みとし、チーム全体の生産性向上に貢献していきます。
