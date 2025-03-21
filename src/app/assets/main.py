import os

# Path to the sounds directory (adjust if needed)
sounds_dir = os.path.join(os.getcwd(), 'src', 'app','assets', 'sounds')
print(sounds_dir)
# Ensure the directory exists
if not os.path.exists(sounds_dir):
    print(f"❌ Sounds directory not found: {sounds_dir}")
    exit(1)

# Supported audio extensions (add more if needed)
audio_extensions = ('.mp3', '.weba', '.ogg', '.wav', '.m4a')

# Get a list of audio files in the folder
audio_files = [f for f in os.listdir(sounds_dir) if f.lower().endswith(audio_extensions)]

# Sort files (optional: alphabetically or by creation time)
audio_files.sort()  # Alphabetical order
# audio_files.sort(key=lambda f: os.path.getctime(os.path.join(sounds_dir, f)))  # By creation time

# Rename each audio file sequentially
for index, old_name in enumerate(audio_files, start=1):
    ext = os.path.splitext(old_name)[1]  # Get the file extension
    new_name = f"sound{index}{ext}"
    
    old_path = os.path.join(sounds_dir, old_name)
    new_path = os.path.join(sounds_dir, new_name)

    # Rename the file
    os.rename(old_path, new_path)
    print(f"✅ Renamed: {old_name} → {new_name}")

print(f"🎵 {len(audio_files)} audio files renamed successfully!")
