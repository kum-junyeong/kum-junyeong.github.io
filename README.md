# Junyeong Kum — Portfolio

빌드 도구 없이 동작하는 정적 홈페이지입니다. GitHub Pages에 그대로 올리면 됩니다.
배포 주소: https://kum-junyeong.github.io

## 파일 구성

```
portfolio/
├── content.js        ✏️ 내용 수정은 여기만 (Profile, Projects, Publications, Activities, CV)
├── style.css         🎨 색상·폰트 (맨 위 :root 변수만 바꾸면 전체 적용)
├── main.js           페이지 렌더링 코드 (수정할 필요 없음)
├── index.html        Profile
├── projects.html
├── publications.html
├── activities.html
├── cv.html
├── images/           프로필 사진, 프로젝트/논문 이미지
└── files/            CV PDF
```

## 내용 업데이트하기

모든 내용은 `content.js`에 있습니다. 각 항목 위의 주석을 참고하세요.

| 하고 싶은 일 | 방법 |
|---|---|
| 논문 추가 | `publications` 안의 `{ ... }` 블록 하나를 복사해 맨 위에 붙여넣고 내용 수정 |
| 논문을 프로젝트에 연결 | 프로젝트의 `publications: ["논문id"]`에 논문의 `id` 추가 |
| 수상 표시 | 논문에 `award: "Best Paper Award"` 추가 |
| Profile 페이지에 논문 노출 | 논문에 `selected: true` 추가 |
| 프로젝트 추가 | `projects` 안의 블록 복사. 순서대로 01, 02… 번호가 자동으로 붙음 |
| 활동 추가 | `activities` 맨 위에 블록 추가 (위쪽이 최신) |
| 이미지 넣기 | `images/` 폴더에 파일을 넣고 `image: "images/projects/파일명.png"` 입력 |
| 프로필 사진 | `images/profile.jpg`로 저장 (없으면 이니셜 표시) |
| CV PDF | `files/CV_Junyeong_Kum.pdf`로 저장 |

> 수정 후에는 `index.html`을 더블클릭해서 브라우저로 바로 확인할 수 있습니다.
> 화면이 하얗게 나오면 `content.js`에서 쉼표(,)나 따옴표(")가 빠지지 않았는지 확인하세요.

## GitHub Pages 배포 (처음 한 번)

1. https://github.com/new 에서 저장소 이름을 **`kum-junyeong.github.io`** 로, **Public** 으로 만듭니다.
   (README 추가 등 옵션은 체크하지 마세요)
2. 이 폴더에서 푸시합니다. (로컬 커밋과 원격 주소 설정은 이미 되어 있습니다)
   ```bash
   git push -u origin main
   ```
3. 저장소 **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)** → Save
4. 1~2분 뒤 https://kum-junyeong.github.io 에서 확인합니다.

## 이후 업데이트

- 웹에서: GitHub 저장소에서 `content.js` 클릭 → 연필(✏️) 아이콘 → 수정 → **Commit changes**
- 터미널에서: `git add . && git commit -m "Update" && git push`

1~2분 뒤 사이트에 반영됩니다.
