require 'rails_helper'

describe 'タスク管理機能', type: :system do
  describe 'タスク一覧機能' do
    before do
      user_a = FactoryBot.create(:user, name: 'ユーザーA', email: 'a@example.com')
      # ユーザーAを作成しておく
      FactoryBot.create(:task, name: '最初のタスク', user: user_a)
      # 作成者がユーザーAであるタスクを作成しておく
    end

    context 'ユーザーAがログインしているとき' do
      before do
        visit login_path
        fill_in 'メールアドレス', with: 'a@example.com'
        fill_in 'パスワード', with: 'password'
        click_button 'ログインする'
        # ユーザーAでログインする
      end

      it 'ユーザーAが作成したタスクが表示される' do
        expect(page).to have_content '最初のタスク'
        # 作成済みのタスクの名称が画面上に表示されていることを確認
      end
    end
  end
end
