import subprocess
import sys
from datetime import datetime

def run(cmd):
    result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if result.stdout:
        print(result.stdout.strip())
    if result.stderr:
        print(result.stderr.strip())
    if result.returncode != 0:
        print(f"\n❌ Command failed: {cmd}")
        sys.exit(1)
    return result

def main():
    message = sys.argv[1] if len(sys.argv) > 1 else f"updated {datetime.now().strftime('%Y-%m-%d %H:%M')}"

    print("📦 Staging all changes...")
    run("git add .")

    print(f"✅ Committing with message: '{message}'")
    run(f'git commit -m "{message}"')

    print("🚀 Pushing to remote...")
    run("git push")

    print("\n✅ Done!")

if __name__ == "__main__":
    main()