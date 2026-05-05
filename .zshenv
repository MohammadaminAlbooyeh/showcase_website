# Workspace-specific zsh environment configuration
# This file is automatically sourced by zsh when opening terminals in this workspace

# Activate Python virtual environment for this project
_activate_venv() {
  local venv_path="${PWD}/backend/venv"
  
  if [ -z "$VIRTUAL_ENV" ] && [ -d "$venv_path" ]; then
    if [ -f "$venv_path/bin/activate" ]; then
      source "$venv_path/bin/activate"
      return 0
    fi
  fi
}

# Only activate if we're in the workspace directory
if [[ "$PWD" == *"showcase_website"* ]] || [[ "$PWD" == *"$(dirname "${(%):-%x}")/"* ]]; then
  _activate_venv
fi

